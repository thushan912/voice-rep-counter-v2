#!/usr/bin/env bash
#
# Deploy script for voicerepcounter.com (static Astro site served from Docker).
#
# Usage:
#   ./deploy.sh
#
# It pulls the latest committed code from the configured Git remote, rebuilds
# the Docker image, restarts the container, and runs smoke tests. Run it from
# anywhere; it always operates on its own directory.
#
set -euo pipefail

# Resolve the project directory to wherever this script lives.
PROJECT_DIR="$(cd "$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")" && pwd)"
cd "$PROJECT_DIR"

CONTAINER_NAME="voice-rep-counter-site"
LOCAL_URL="http://127.0.0.1:8091"

echo "=============================================="
echo " Deploying voicerepcounter.com"
echo " Project dir: $PROJECT_DIR"
echo "=============================================="

# --- 1. Pull the latest committed code ------------------------------------
BRANCH="$(git branch --show-current)"
echo ">> Fetching latest code from origin/$BRANCH ..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

# --- 2. Ensure the container binds a free loopback port ---------------------
# The upstream default (127.0.0.1:8085) clashes with codeneir-push-web on this
# host, so always pin the site to 127.0.0.1:8091 before starting it.
if grep -q '127\.0\.0\.1:8085:80' docker-compose.yml; then
    echo ">> Adjusting compose port 8085 -> 8091 (8085 is used by another service)."
    sed -i 's#127\.0\.0\.1:8085:80#127.0.0.1:8091:80#g' docker-compose.yml
fi

# --- 3. Build and (re)start the container ----------------------------------
echo ">> Building the Docker image ..."
docker compose build

echo ">> (Re)starting the container ..."
docker compose up -d

# --- 4. Wait until the container is healthy ---------------------------------
echo ">> Waiting for the container to become healthy ..."
STATUS="unknown"
for _ in $(seq 1 60); do
    STATUS="$(docker inspect --format='{{.State.Health.Status}}' "$CONTAINER_NAME" 2>/dev/null || echo 'missing')"
    if [ "$STATUS" = "healthy" ]; then
        echo ">> Container is healthy."
        break
    fi
    if [ "$STATUS" = "unhealthy" ]; then
        echo "!! Container reported unhealthy." >&2
        docker compose logs --tail 50 || true
        exit 1
    fi
    sleep 3
done

if [ "$STATUS" != "healthy" ]; then
    echo "!! Timed out waiting for a healthy container." >&2
    docker compose ps
    exit 1
fi

# --- 5. Smoke tests ---------------------------------------------------------
echo ">> Running smoke tests ..."
ROOT_CODE="$(curl -s -o /dev/null -w '%{http_code}' "$LOCAL_URL/")"
NOTFOUND_CODE="$(curl -s -o /dev/null -w '%{http_code}' "$LOCAL_URL/does-not-exist/")"
echo "   GET /                 -> $ROOT_CODE (expect 200)"
echo "   GET /does-not-exist/  -> $NOTFOUND_CODE (expect 404)"

if [ "$ROOT_CODE" != "200" ]; then
    echo "!! Root did not return 200." >&2
    exit 1
fi
if [ "$NOTFOUND_CODE" != "404" ]; then
    echo "!! The 404 route did not return 404." >&2
    exit 1
fi

# --- 6. Cleanup dangling build layers (safe: only unused images) ------------
echo ">> Removing dangling images ..."
docker image prune -f >/dev/null || true

echo "=============================================="
echo " Deploy complete: https://voicerepcounter.com/"
echo "=============================================="
