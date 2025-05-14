/**
 * Quiz functionality module
 */
import { setupTimer } from './timer.js';
import { quizData } from './quiz-data.js';

export function setupQuiz() {
  // DOM elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const categoriesScreen = document.getElementById('categories-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultsScreen = document.getElementById('results-screen');
  
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const viewCategoriesBtn = document.getElementById('view-categories-btn');
  const categoryCards = document.querySelectorAll('.category-card');
  const nextBtn = document.getElementById('next-btn');
  const retryBtn = document.getElementById('retry-btn');
  const homeBtn = document.getElementById('home-btn');
  
  const currentQuestionEl = document.getElementById('current-question');
  const totalQuestionsEl = document.getElementById('total-questions');
  const questionTextEl = document.getElementById('question-text');
  const optionsContainer = document.querySelector('.options-container');
  const optionElements = document.querySelectorAll('.option');
  const currentScoreEl = document.getElementById('current-score');
  const progressFill = document.querySelector('.progress-fill');
  
  const finalScoreEl = document.getElementById('final-score');
  const finalTotalEl = document.getElementById('final-total');
  const finalScorePercentEl = document.getElementById('final-score-percent');
  const correctAnswersEl = document.querySelector('.correct-answers');
  const incorrectAnswersEl = document.querySelector('.incorrect-answers');
  const timeTakenEl = document.querySelector('.time-taken');
  
  // Quiz state
  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedCategory = '';
  let timer = null;
  let startTime = 0;
  let endTime = 0;
  
  // Initialize event listeners
  function initEventListeners() {
    startQuizBtn.addEventListener('click', () => {
      selectedCategory = 'general'; // Default category
      startQuiz();
    });
    
    viewCategoriesBtn.addEventListener('click', showCategoriesScreen);
    
    categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        selectedCategory = card.dataset.category;
        startQuiz();
      });
    });
    
    nextBtn.addEventListener('click', goToNextQuestion);
    
    retryBtn.addEventListener('click', () => {
      selectedCategory = selectedCategory || 'general';
      startQuiz();
    });
    
    homeBtn.addEventListener('click', showWelcomeScreen);
    
    optionElements.forEach(option => {
      option.addEventListener('click', () => {
        handleOptionSelection(option);
      });
    });
  }
  
  // Show welcome screen
  function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.remove('hidden');
  }
  
  // Show categories screen
  function showCategoriesScreen() {
    hideAllScreens();
    categoriesScreen.classList.remove('hidden');
  }
  
  // Hide all screens
  function hideAllScreens() {
    welcomeScreen.classList.add('hidden');
    categoriesScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
  }
  
  // Start the quiz
  function startQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    currentScoreEl.textContent = '0';
    
    // Get questions for selected category
    currentQuiz = quizData.filter(q => q.category === selectedCategory || selectedCategory === 'all');
    if (currentQuiz.length === 0) {
      currentQuiz = quizData.slice(0, 10); // Fallback if no questions in category
    } else if (currentQuiz.length > 10) {
      // Shuffle and take 10 questions
      currentQuiz = shuffleArray(currentQuiz).slice(0, 10);
    }
    
    // Update UI
    totalQuestionsEl.textContent = currentQuiz.length;
    
    // Start timer
    startTime = Date.now();
    timer = setupTimer(30, handleTimerComplete);
    
    // Show first question
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    loadQuestion(currentQuestionIndex);
  }
  
  // Load question
  function loadQuestion(index) {
    // Reset timer for each question
    timer.reset();
    
    const question = currentQuiz[index];
    questionTextEl.textContent = question.question;
    currentQuestionEl.textContent = index + 1;
    
    // Update progress bar
    const progressPercentage = ((index + 1) / currentQuiz.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Create options
    optionsContainer.innerHTML = '';
    
    const optionLetters = ['A', 'B', 'C', 'D'];
    const allOptions = [question.correctAnswer, ...question.incorrectAnswers];
    const shuffledOptions = shuffleArray(allOptions);
    
    shuffledOptions.forEach((option, i) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.dataset.option = optionLetters[i].toLowerCase();
      optionElement.dataset.correct = option === question.correctAnswer ? 'true' : 'false';
      
      optionElement.innerHTML = `
        <div class="option-prefix">${optionLetters[i]}</div>
        <div class="option-text">${option}</div>
      `;
      
      optionElement.addEventListener('click', () => {
        handleOptionSelection(optionElement);
      });
      
      optionsContainer.appendChild(optionElement);
    });
    
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled');
  }
  
  // Handle option selection
  function handleOptionSelection(optionElement) {
    if (timer) {
      timer.pause();
    }
    
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
      option.classList.add('disabled');
    });
    
    const isCorrect = optionElement.dataset.correct === 'true';
    
    if (isCorrect) {
      optionElement.classList.add('correct');
      score++;
      currentScoreEl.textContent = score;
    } else {
      optionElement.classList.add('incorrect');
      // Highlight the correct answer
      allOptions.forEach(option => {
        if (option.dataset.correct === 'true') {
          option.classList.add('correct');
        }
      });
    }
    
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
  }
  
  // Go to next question
  function goToNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      endQuiz();
    }
  }
  
  // Handle timer complete
  function handleTimerComplete() {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
      option.classList.add('disabled');
      if (option.dataset.correct === 'true') {
        option.classList.add('correct');
      }
    });
    
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
  }
  
  // End quiz and show results
  function endQuiz() {
    endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    
    // Format time taken
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Calculate results
    const totalQuestions = currentQuiz.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update results UI
    finalScoreEl.textContent = correctAnswers;
    finalTotalEl.textContent = totalQuestions;
    finalScorePercentEl.textContent = `${percentage}%`;
    correctAnswersEl.textContent = correctAnswers;
    incorrectAnswersEl.textContent = incorrectAnswers;
    timeTakenEl.textContent = formattedTime;
    
    // Show results screen
    hideAllScreens();
    resultsScreen.classList.remove('hidden');
  }
  
  // Helper function to shuffle array
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  // Initialize quiz
  initEventListeners();
  showWelcomeScreen();
  
  // Return public interface
  return {
    startQuiz,
    showWelcomeScreen,
    showCategoriesScreen
  };
}