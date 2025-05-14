/**
 * Enhanced counter module with animations and transitions
 * @param {HTMLElement} element - The element to attach the counter to
 */
export function setupCounter(element) {
  let counter = 0;
  
  /**
   * Sets the counter value with animation
   * @param {number} count - The new counter value
   */
  const setCounter = (count) => {
    // Store previous value for animation
    const prevValue = counter;
    counter = count;
    
    // Create animation
    const animateValue = (from, to, duration) => {
      const startTime = performance.now();
      
      const updateValue = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime > duration) {
          element.innerHTML = `<span>${to}</span>`;
          return;
        }
        
        const progress = elapsedTime / duration;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.round(from + (to - from) * easeOutQuad);
        
        element.innerHTML = `<span>${currentValue}</span>`;
        requestAnimationFrame(updateValue);
      };
      
      requestAnimationFrame(updateValue);
    };
    
    // Animate counter value
    animateValue(prevValue, count, 300);
  };
  
  // Add click event with subtle animation
  element.addEventListener('click', () => {
    element.classList.add('button-clicked');
    setTimeout(() => element.classList.remove('button-clicked'), 150);
    setCounter(counter + 1);
  });
  
  // Add hover animation
  element.addEventListener('mouseenter', () => {
    element.classList.add('button-hover');
  });
  
  element.addEventListener('mouseleave', () => {
    element.classList.remove('button-hover');
  });
  
  // Initialize counter
  setCounter(0);
  
  // Return interface for external control
  return {
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
    reset: () => setCounter(0),
    getValue: () => counter,
    setValue: (value) => setCounter(value)
  };
}