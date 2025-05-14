import '../style.css';
import { setupQuiz } from './quiz.js';
import { setupAnimations } from './animations.js';
import { setupTheme } from './theme.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Render the main app structure
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <div class="container header-content">
        <div class="logo">Quizzical</div>
        <nav class="nav">
          <a href="#home" class="nav-item">Home</a>
          <a href="#categories" class="nav-item">Categories</a>
          <a href="#leaderboard" class="nav-item">Leaderboard</a>
          <button id="theme-switcher" class="theme-button" aria-label="Toggle theme">
            <span class="theme-icon"></span>
          </button>
        </nav>
      </div>
    </header>

    <main>
      <section id="welcome-screen" class="section hero">
        <div class="container">
          <h1 class="hero-title animate-on-scroll">Test Your Knowledge</h1>
          <p class="hero-subtitle animate-on-scroll">Challenge yourself with our curated quizzes across various categories.</p>
          
          <div class="hero-cta animate-on-scroll">
            <button id="start-quiz-btn" class="primary-button">Start Quiz</button>
            <button id="view-categories-btn" class="secondary-button">View Categories</button>
          </div>
        </div>
      </section>

      <section id="categories-screen" class="section categories hidden">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Select a Category</h2>
          
          <div class="categories-grid animate-on-scroll">
            <div class="category-card" data-category="general">
              <div class="category-icon">🌐</div>
              <h3 class="category-title">General Knowledge</h3>
              <p class="category-description">Test your knowledge across a variety of topics.</p>
            </div>
            
            <div class="category-card" data-category="science">
              <div class="category-icon">🔬</div>
              <h3 class="category-title">Science</h3>
              <p class="category-description">Explore the wonders of the natural world.</p>
            </div>
            
            <div class="category-card" data-category="history">
              <div class="category-icon">📜</div>
              <h3 class="category-title">History</h3>
              <p class="category-description">Journey through time with historical facts.</p>
            </div>
            
            <div class="category-card" data-category="geography">
              <div class="category-icon">🌍</div>
              <h3 class="category-title">Geography</h3>
              <p class="category-description">Discover places around the world.</p>
            </div>
            
            <div class="category-card" data-category="entertainment">
              <div class="category-icon">🎬</div>
              <h3 class="category-title">Entertainment</h3>
              <p class="category-description">Test your knowledge of movies, music, and more.</p>
            </div>
            
            <div class="category-card" data-category="technology">
              <div class="category-icon">💻</div>
              <h3 class="category-title">Technology</h3>
              <p class="category-description">Navigate the digital world and its innovations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz-screen" class="section quiz hidden">
        <div class="container">
          <div class="quiz-header">
            <div class="quiz-progress">
              <div class="progress-text">Question <span id="current-question">1</span>/<span id="total-questions">10</span></div>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>
            
            <div class="quiz-timer">
              <div class="timer-icon"></div>
              <div class="timer-text">00:30</div>
              <div class="timer-bar">
                <div class="timer-fill"></div>
              </div>
            </div>
            
            <div class="quiz-score">
              Score: <span id="current-score">0</span>
            </div>
          </div>
          
          <div class="quiz-content">
            <h2 id="question-text" class="question-text animate-on-scroll">What is the capital of France?</h2>
            
            <div class="options-container animate-on-scroll">
              <div class="option" data-option="a">
                <div class="option-prefix">A</div>
                <div class="option-text">London</div>
              </div>
              
              <div class="option" data-option="b">
                <div class="option-prefix">B</div>
                <div class="option-text">Berlin</div>
              </div>
              
              <div class="option" data-option="c">
                <div class="option-prefix">C</div>
                <div class="option-text">Paris</div>
              </div>
              
              <div class="option" data-option="d">
                <div class="option-prefix">D</div>
                <div class="option-text">Madrid</div>
              </div>
            </div>
          </div>
          
          <div class="quiz-footer">
            <button id="next-btn" class="primary-button">Next Question</button>
          </div>
        </div>
      </section>

      <section id="results-screen" class="section results hidden">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Your Results</h2>
          
          <div class="results-card animate-on-scroll">
            <div class="results-score">
              <div class="score-circle">
                <span id="final-score-percent">80%</span>
              </div>
              <div class="score-text">
                You scored <span id="final-score">8</span>/<span id="final-total">10</span>
              </div>
            </div>
            
            <div class="results-summary">
              <div class="summary-item">
                <div class="summary-label">Correct Answers</div>
                <div class="summary-value correct-answers">8</div>
              </div>
              
              <div class="summary-item">
                <div class="summary-label">Incorrect Answers</div>
                <div class="summary-value incorrect-answers">2</div>
              </div>
              
              <div class="summary-item">
                <div class="summary-label">Time Taken</div>
                <div class="summary-value time-taken">01:45</div>
              </div>
            </div>
            
            <div class="results-actions">
              <button id="retry-btn" class="primary-button">Try Again</button>
              <button id="home-btn" class="secondary-button">Back to Home</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-logo">Quizzical</div>
        <div class="footer-copyright">&copy; 2025 Quizzical. All rights reserved.</div>
        <div class="social-links">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;

  // Initialize theme functionality
  setupTheme();
  
  // Initialize animations
  const animations = setupAnimations();
  
  // Initialize quiz functionality
  setupQuiz();
});