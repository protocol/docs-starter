const mode = document.getElementById('font-switcher');

if (mode !== null) {

  window.addEventListener('change', event => {

    if (event.matches) {

      document.documentElement.setAttribute('data-dyslexic-font', '');

    } else {

      document.documentElement.removeAttribute('data-dyslexic-font');

    }

  })

  mode.addEventListener('click', () => {

    document.documentElement.toggleAttribute('data-dyslexic-font');

  });

  if (localStorage.getItem('theme') === 'dark') {

    document.documentElement.setAttribute('data-dyslexic-font', '');

  } else {

    document.documentElement.removeAttribute('data-dyslexic-font');

  }

}
