/**
 * Timer functionality module
 */
export function setupTimer(duration, onComplete) {
  let timeLeft = duration;
  let timerId = null;
  let isPaused = false;
  
  const timerTextEl = document.querySelector('.timer-text');
  const timerFillEl = document.querySelector('.timer-fill');
  
  /**
   * Update timer display
   */
  function updateTimerDisplay() {
    // Format seconds to mm:ss
    const seconds = timeLeft % 60;
    const minutes = Math.floor(timeLeft / 60);
    timerTextEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update progress bar
    const progressPercentage = (timeLeft / duration) * 100;
    timerFillEl.style.width = `${progressPercentage}%`;
    
    // Add warning class when time is running low
    if (timeLeft <= 10) {
      timerFillEl.classList.add('warning');
    } else {
      timerFillEl.classList.remove('warning');
    }
  }
  
  /**
   * Start the timer
   */
  function start() {
    if (timerId) {
      clearInterval(timerId);
    }
    
    isPaused = false;
    timeLeft = duration;
    updateTimerDisplay();
    
    timerId = setInterval(() => {
      if (!isPaused) {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
          stop();
          if (onComplete && typeof onComplete === 'function') {
            onComplete();
          }
        }
      }
    }, 1000);
    
    return {
      pause,
      resume,
      stop,
      reset
    };
  }
  
  /**
   * Pause the timer
   */
  function pause() {
    isPaused = true;
  }
  
  /**
   * Resume the timer
   */
  function resume() {
    isPaused = false;
  }
  
  /**
   * Stop the timer
   */
  function stop() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }
  
  /**
   * Reset the timer and start again
   */
  function reset() {
    stop();
    return start();
  }
  
  // Start timer immediately
  return start();
}