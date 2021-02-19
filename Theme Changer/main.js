const ThemeControl = {
  // We've added a checkbox to change between themes
  changeTheme() {
    // Let's call for the transition smoothing here!
    ThemeControl.themeTransition();

    // Was the checkbox checked?
    // if yes, we switch to the dark theme
    // if it was unchecked then we get back to light
    document.querySelector('#theme-selector').checked ?
      document.documentElement.setAttribute('data-theme', 'dark') :
      document.documentElement.setAttribute('data-theme', 'light');


  },
  // Here is the code that applies the transition smoothing between themes   
  themeTransition() {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 1000)
  }
}