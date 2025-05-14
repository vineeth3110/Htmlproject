/**
 * Theme functionality module to handle light/dark mode
 */
export function setupTheme() {
  const themeSwitcher = document.getElementById('theme-switcher');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');
  
  /**
   * Set theme based on:
   * 1. User's previous selection (stored)
   * 2. System preference
   * 3. Default to light
   */
  function setInitialTheme() {
    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
      document.documentElement.classList.add('dark-theme');
      themeSwitcher.classList.add('dark-active');
    } else {
      document.documentElement.classList.remove('dark-theme');
      themeSwitcher.classList.remove('dark-active');
    }
  }
  
  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark-theme')) {
      document.documentElement.classList.remove('dark-theme');
      themeSwitcher.classList.remove('dark-active');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-theme');
      themeSwitcher.classList.add('dark-active');
      localStorage.setItem('theme', 'dark');
    }
    
    // Add transition class for smooth theme change
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 500);
  }
  
  // Event listeners
  themeSwitcher.addEventListener('click', toggleTheme);
  
  // Listen for system preference changes
  prefersDarkScheme.addEventListener('change', e => {
    // Only update if user hasn't explicitly chosen a theme
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark-theme');
        themeSwitcher.classList.add('dark-active');
      } else {
        document.documentElement.classList.remove('dark-theme');
        themeSwitcher.classList.remove('dark-active');
      }
    }
  });
  
  // Set initial theme
  setInitialTheme();
  
  // Return public interface
  return {
    toggleTheme,
    getCurrentTheme: () => localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light')
  };
}