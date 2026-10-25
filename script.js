document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('button[aria-label="copy"]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const parentContainer = btn.closest('.highlighter-rouge') || btn.parentElement;
      const codeElement = parentContainer.querySelector('code');
      if (!codeElement) return;
      const textToCopy = codeElement.innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        const successText = btn.getAttribute('data-title-succeed') || 'Copied!';
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check text-success"></i> <span style="font-size: 11px; margin-left: 4px; color: #00ff64;">${successText}</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Kopiëren mislukt: ', err);
      }
    });
  });
});
