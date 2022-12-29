const mode = document.getElementById('font-switcher');

if (mode !== null) {

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {

      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-dyslexic-font', '');

    } else {

      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-dyslexic-font');

    }

  })

  mode.addEventListener('click', () => {

    document.documentElement.toggleAttribute('data-dyslexic-font');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-dyslexic-font') ? 'dark' : 'light');

  });

  if (localStorage.getItem('theme') === 'dark') {

    document.documentElement.setAttribute('data-dyslexic-font', '');

  } else {

    document.documentElement.removeAttribute('data-dyslexic-font');

  }

}
