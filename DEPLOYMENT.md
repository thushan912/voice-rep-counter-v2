# Deployment Guide — Ubuntu VPS + Docker Compose + Nginx

This site is fully static. The production environment serves `dist/` from Nginx inside a Docker container; the host's existing reverse proxy terminates public HTTPS.

## Architecture

```
DNS A/AAAA
  → existing VPS public reverse proxy (HTTPS, Let's Encrypt)
    → 127.0.0.1:8085
      → Docker static Nginx
        → Astro dist/
```

Do **not** bind a second container to host ports 80/443 if they are already in use. Reuse the existing reverse proxy and only expose the site container to loopback (`127.0.0.1:8085`).

## Prerequisites

- Docker Engine + Docker Compose plugin on the VPS
- An existing reverse proxy (Nginx, Nginx Proxy Manager, Caddy, or Traefik) with a valid TLS certificate for `voicerepcounter.com`
- Git access to this repository

## 1. Build and test locally

```bash
npm ci
npm run build
npm run check
node scripts/verify-build.mjs
```

Inspect `dist/` locally, then preview:

```bash
npm run preview
```

## 2. Build the image

```bash
docker compose build
```

## 3. Start the container

```bash
docker compose up -d
docker compose ps
```

Verify the loopback endpoint and the custom 404:

```bash
curl -I http://127.0.0.1:8085/
curl -I http://127.0.0.1:8085/does-not-exist/
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8085/does-not-exist/
```

The last command must return `404`.

## 4. Reverse-proxy integration

Add a new site in the existing proxy that forwards HTTPS to `http://127.0.0.1:8085`. Example Nginx reverse-proxy server block:

```nginx
server {
    listen 443 ssl http2;
    server_name voicerepcounter.com www.voicerepcounter.com;

    # ssl_certificate / ssl_certificate_key managed by your ACME setup

    location / {
        proxy_pass http://127.0.0.1:8085;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}

# Canonical host: redirect www and plain HTTP to https://voicerepcounter.com/
server {
    listen 80;
    server_name voicerepcounter.com www.voicerepcounter.com;
    return 301 https://voicerepcounter.com$request_uri;
}
```

If the proxy runs inside its own Docker network and cannot reach loopback-bound containers, use an explicit shared internal Docker network instead of `127.0.0.1:8085`.

## 5. Verify production

```bash
curl -I https://voicerepcounter.com/
curl -s https://voicerepcounter.com/robots.txt
curl -s https://voicerepcounter.com/sitemap-index.xml
```

Check:

- `<html lang="en">` on root, `<html lang="it">` on `/it/`
- canonical and hreflang tags per page
- store badges resolve (Google Play + App Store)
- legal/contact pages load
- unknown routes return HTTP 404 with the styled body

## 6. Rollback

The static output is fully contained in the Docker image.

```bash
# Tag the current working image first
docker tag voice-rep-counter-site voice-rep-counter-site:stable

# Roll back to a previous tag or rebuild an earlier commit
docker tag voice-rep-counter-site:previous voice-rep-counter-site:latest
docker compose up -d
```

Alternatively, rebuild from an earlier Git commit:

```bash
git checkout <previous-tag-or-commit>
docker compose build
docker compose up -d
```

## 7. Security headers and CSP

Baseline headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`) are set in [`nginx.conf`](nginx.conf). A `Content-Security-Policy` is intentionally left out until the deployed site is tested, because an over-strict policy can break the bundled assets or store badges. To add one, test a policy such as:

```nginx
add_header Content-Security-Policy "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'" always;
```

Validate against the real site before enabling.

## 8. Post-launch checklist

- Re-verify the Google Play and App Store URLs in [`src/data/site.ts`](src/data/site.ts).
- Complete the human legal review of the Privacy Policy, Terms, and public legal identity.
- Submit the sitemap in Google Search Console and validate JSON-LD in the Rich Results Test.
- Confirm DNS: `@` → VPS IPv4, `www` → root (or A record), and remove/update any stale AAAA records.
- Monitor HTTPS renewal, uptime, 404 rates, and Search Console indexing.

## Notes

- No database, no backend, no Node.js process in production.
- The container only binds to `127.0.0.1:8085`; never expose the Node dev server or port 8085 publicly.
