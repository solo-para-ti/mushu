document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Copy buttons
  document.querySelectorAll('button.copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const text = card ? card.querySelector('pre').innerText.trim() : '';
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles.');
      }).catch(() => {
        prompt('Copia el texto manualmente:', text);
      });
    });
  });

  // Download buttons (descarga el texto como archivo .txt)
  document.querySelectorAll('button.download').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const text = card ? card.querySelector('pre').innerText.trim() : '';
      if (!text) return;
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'frase.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  });

  // Theme toggle (simple)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
      localStorage.removeItem('theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '🌤️';
      localStorage.setItem('theme', 'dark');
    }
  });

  // Restore saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const t = document.getElementById('themeToggle');
    if (t) t.textContent = '🌤️';
  }
});
