const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  if (href === '#') return `<span style="color:var(--muted)">${text}</span>`;
  return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
};

const opt = { breaks: true, gfm: true, renderer };

fetch('./README.md')
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.text();
  })
  .then(md => {
    document.getElementById('content').innerHTML = marked.parse(md, opt);
  })
  .catch(err => {
    document.getElementById('content').innerHTML = `
      <div class="error">
        <div style="font-size:32px;margin-bottom:8px;">⚠</div>
        Failed to load tracking data.<br>
        <span style="font-size:12px;color:var(--muted)">${err.message}</span>
      </div>`;
  });
