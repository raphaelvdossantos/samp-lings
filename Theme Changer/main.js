const ThemeControl = {
  changeTheme() {
    ThemeControl.themeTransition();
    document.querySelector('#theme-selector').checked ?
      document.documentElement.setAttribute('data-theme', 'dark') :
      document.documentElement.setAttribute('data-theme', 'light');
  },
  themeTransition() {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 1000)
  }
}