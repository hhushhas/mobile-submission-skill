# Static Policy Site

Use when `urls.privacy`, `urls.support`, or `urls.deletion` are missing.

## Fast path

- Create a tiny static site with privacy policy, support, and account deletion pages only when approved policy text exists or the user approves generated copy.
- Deploy with Cloudflare Workers/Pages through `wrangler` only after user approval for public deployment.
- Ask which domain to connect.
- If no domain choice, use the Worker/Pages URL.
- If `cf` CLI has DNS access, connect DNS after user names the domain.

## Keep it minimal

- No app secrets.
- No analytics by default.
- Clear contact/support email.
- Account deletion page must describe the in-app or web deletion path.
- Do not invent legal/privacy claims. If facts are missing, create a human task listing the missing facts instead of deploying.

## Packet

After deploy, update:

- `urls.privacy`
- `urls.support`
- `urls.deletion`
