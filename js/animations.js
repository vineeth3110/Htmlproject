/**
 * Handles scroll-based animations and interactions
 */
export function setupAnimations() {
  /**
   * Observe elements and trigger animation when they appear in viewport
   */
  const setupScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observer.observe(el);
      // Initially hide elements
      el.style.opacity = '0';
    });
  };
  
  /**
   * Setup parallax effect on hero section
   */
  const setupParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  };
  
  /**
   * Handle header transparency based on scroll position
   */
  const setupHeaderTransparency = () => {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  };
  
  /**
   * Setup smooth scroll for anchor links
   */
  const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      });
    });
  };
  
  // Initialize all animations
  setupScrollAnimations();
  setupParallax();
  setupHeaderTransparency();
  setupSmoothScroll();
  
  // Return public interface
  return {
    refreshAnimations: setupScrollAnimations
  };
}