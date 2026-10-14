# GlideForge — Brand Site

Official product-introduction site for **GlideForge** gaming mouse pads.
Static site, hosted on GitHub Pages (free).

## Local preview

```bash
cd glideforge-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to the `main` branch of the GitHub repo — Pages serves it automatically.

## Custom domain

`CNAME` contains `glideforgepad.com`. After registering the domain, add DNS records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | &lt;github-username&gt;.github.io |

(Those four A records are GitHub Pages' IPs.) Then enable "Enforce HTTPS" in repo Settings → Pages.

## TODO before launch

- [ ] Replace `hello@glideforgepad.com` with the real contact email
- [ ] Confirm product prices/sizes with the actual factory specs
- [ ] Add product photos once samples are ready
