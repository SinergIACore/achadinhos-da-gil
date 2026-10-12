<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep invitation destinations and the Meta Pixel ID in the shared SITE configuration so page links and tracking use one source of truth.
- Use the shared Button with an anchor child for the WhatsApp invitation so navigation preserves design-system behavior.
- Use CDN asset pointers for marketplace logos and a duplicated CSS marquee with a reduced-motion fallback so imagery stays portable and accessible.
