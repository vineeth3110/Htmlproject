(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function j(c,a){let i=c,l=null,e=!1;const t=document.querySelector(".timer-text"),r=document.querySelector(".timer-fill");function o(){const A=i%60,M=Math.floor(i/60);t.textContent=`${M.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}`;const L=i/c*100;r.style.width=`${L}%`,i<=10?r.classList.add("warning"):r.classList.remove("warning")}function w(){return l&&clearInterval(l),e=!1,i=c,o(),l=setInterval(()=>{e||(i--,o(),i<=0&&(v(),a&&typeof a=="function"&&a()))},1e3),{pause:I,resume:x,stop:v,reset:C}}function I(){e=!0}function x(){e=!1}function v(){l&&(clearInterval(l),l=null)}function C(){return v(),w()}return w()}const D=[{category:"general",question:"What is the capital of France?",correctAnswer:"Paris",incorrectAnswers:["London","Berlin","Madrid"]},{category:"general",question:"Which planet is known as the Red Planet?",correctAnswer:"Mars",incorrectAnswers:["Venus","Jupiter","Mercury"]},{category:"general",question:"Who painted the Mona Lisa?",correctAnswer:"Leonardo da Vinci",incorrectAnswers:["Vincent van Gogh","Pablo Picasso","Michelangelo"]},{category:"general",question:"What is the largest ocean on Earth?",correctAnswer:"Pacific Ocean",incorrectAnswers:["Atlantic Ocean","Indian Ocean","Arctic Ocean"]},{category:"general",question:"In what year did the Titanic sink?",correctAnswer:"1912",incorrectAnswers:["1905","1920","1931"]},{category:"science",question:"What is the chemical symbol for gold?",correctAnswer:"Au",incorrectAnswers:["Ag","Fe","Cu"]},{category:"science",question:"Which of the following is not a fundamental force in physics?",correctAnswer:"Centrifugal force",incorrectAnswers:["Gravity","Electromagnetic force","Strong nuclear force"]},{category:"science",question:"What is the powerhouse of the cell?",correctAnswer:"Mitochondria",incorrectAnswers:["Nucleus","Ribosome","Endoplasmic reticulum"]},{category:"science",question:"How many elements are in the periodic table?",correctAnswer:"118",incorrectAnswers:["92","108","126"]},{category:"science",question:"What is the speed of light in a vacuum?",correctAnswer:"299,792,458 meters per second",incorrectAnswers:["300,000,000 meters per second","150,000,000 meters per second","350,000,000 meters per second"]},{category:"history",question:"Who was the first president of the United States?",correctAnswer:"George Washington",incorrectAnswers:["Thomas Jefferson","Abraham Lincoln","John Adams"]},{category:"history",question:"In which year did World War II end?",correctAnswer:"1945",incorrectAnswers:["1939","1943","1950"]},{category:"history",question:"Which ancient civilization built the Machu Picchu?",correctAnswer:"Inca",incorrectAnswers:["Aztec","Maya","Egyptian"]},{category:"history",question:'Who wrote "The Communist Manifesto"?',correctAnswer:"Karl Marx and Friedrich Engels",incorrectAnswers:["Vladimir Lenin","Joseph Stalin","Leon Trotsky"]},{category:"history",question:"The Renaissance period began in which country?",correctAnswer:"Italy",incorrectAnswers:["France","England","Germany"]},{category:"geography",question:"Which is the longest river in the world?",correctAnswer:"Nile",incorrectAnswers:["Amazon","Mississippi","Yangtze"]},{category:"geography",question:"What is the smallest country in the world?",correctAnswer:"Vatican City",incorrectAnswers:["Monaco","Nauru","Tuvalu"]},{category:"geography",question:"Which city is the capital of Australia?",correctAnswer:"Canberra",incorrectAnswers:["Sydney","Melbourne","Perth"]},{category:"geography",question:"Mount Everest is located in which mountain range?",correctAnswer:"Himalayas",incorrectAnswers:["Andes","Alps","Rocky Mountains"]},{category:"geography",question:"Which country has the most islands?",correctAnswer:"Sweden",incorrectAnswers:["Indonesia","Philippines","Japan"]},{category:"entertainment",question:"Who played Iron Man in the Marvel Cinematic Universe?",correctAnswer:"Robert Downey Jr.",incorrectAnswers:["Chris Evans","Chris Hemsworth","Mark Ruffalo"]},{category:"entertainment",question:'Which band performed the song "Bohemian Rhapsody"?',correctAnswer:"Queen",incorrectAnswers:["The Beatles","Led Zeppelin","Pink Floyd"]},{category:"entertainment",question:"What was the first feature-length animated movie ever released?",correctAnswer:"Snow White and the Seven Dwarfs",incorrectAnswers:["Pinocchio","Fantasia","Bambi"]},{category:"entertainment",question:"Which TV show featured the characters Jesse Pinkman and Walter White?",correctAnswer:"Breaking Bad",incorrectAnswers:["The Walking Dead","Game of Thrones","The Sopranos"]},{category:"entertainment",question:"Who is the author of the Harry Potter book series?",correctAnswer:"J.K. Rowling",incorrectAnswers:["Stephen King","George R.R. Martin","C.S. Lewis"]},{category:"technology",question:"Who is the co-founder of Apple Inc. along with Steve Jobs?",correctAnswer:"Steve Wozniak",incorrectAnswers:["Bill Gates","Mark Zuckerberg","Elon Musk"]},{category:"technology",question:'What does "HTTP" stand for?',correctAnswer:"Hypertext Transfer Protocol",incorrectAnswers:["Hypertext Terminal Process","Hybrid Transfer Protocol","High-Level Transport Protocol"]},{category:"technology",question:"In what year was the first iPhone released?",correctAnswer:"2007",incorrectAnswers:["2005","2009","2010"]},{category:"technology",question:"What programming language was created by James Gosling at Sun Microsystems?",correctAnswer:"Java",incorrectAnswers:["Python","C++","JavaScript"]},{category:"technology",question:"Which company developed the Windows operating system?",correctAnswer:"Microsoft",incorrectAnswers:["Apple","IBM","Google"]}];function X(){const c=document.getElementById("welcome-screen"),a=document.getElementById("categories-screen"),i=document.getElementById("quiz-screen"),l=document.getElementById("results-screen"),e=document.getElementById("start-quiz-btn"),t=document.getElementById("view-categories-btn"),r=document.querySelectorAll(".category-card"),o=document.getElementById("next-btn"),w=document.getElementById("retry-btn"),I=document.getElementById("home-btn"),x=document.getElementById("current-question"),v=document.getElementById("total-questions"),C=document.getElementById("question-text"),A=document.querySelector(".options-container"),M=document.querySelectorAll(".option"),L=document.getElementById("current-score"),J=document.querySelector(".progress-fill"),G=document.getElementById("final-score"),R=document.getElementById("final-total"),F=document.getElementById("final-score-percent"),$=document.querySelector(".correct-answers"),N=document.querySelector(".incorrect-answers"),Y=document.querySelector(".time-taken");let u=[],y=0,E=0,g="",b=null,B=0,z=0;function V(){e.addEventListener("click",()=>{g="general",S()}),t.addEventListener("click",P),r.forEach(s=>{s.addEventListener("click",()=>{g=s.dataset.category,S()})}),o.addEventListener("click",K),w.addEventListener("click",()=>{g=g||"general",S()}),I.addEventListener("click",W),M.forEach(s=>{s.addEventListener("click",()=>{Q(s)})})}function W(){q(),c.classList.remove("hidden")}function P(){q(),a.classList.remove("hidden")}function q(){c.classList.add("hidden"),a.classList.add("hidden"),i.classList.add("hidden"),l.classList.add("hidden")}function S(){y=0,E=0,L.textContent="0",u=D.filter(s=>s.category===g||g==="all"),u.length===0?u=D.slice(0,10):u.length>10&&(u=H(u).slice(0,10)),v.textContent=u.length,B=Date.now(),b=j(30,U),q(),i.classList.remove("hidden"),O(y)}function O(s){b.reset();const n=u[s];C.textContent=n.question,x.textContent=s+1;const h=(s+1)/u.length*100;J.style.width=`${h}%`,A.innerHTML="";const d=["A","B","C","D"],p=[n.correctAnswer,...n.incorrectAnswers];H(p).forEach((k,T)=>{const m=document.createElement("div");m.classList.add("option"),m.dataset.option=d[T].toLowerCase(),m.dataset.correct=k===n.correctAnswer?"true":"false",m.innerHTML=`
        <div class="option-prefix">${d[T]}</div>
        <div class="option-text">${k}</div>
      `,m.addEventListener("click",()=>{Q(m)}),A.appendChild(m)}),o.disabled=!0,o.classList.add("disabled")}function Q(s){b&&b.pause();const n=document.querySelectorAll(".option");n.forEach(d=>{d.classList.add("disabled")}),s.dataset.correct==="true"?(s.classList.add("correct"),E++,L.textContent=E):(s.classList.add("incorrect"),n.forEach(d=>{d.dataset.correct==="true"&&d.classList.add("correct")})),o.disabled=!1,o.classList.remove("disabled")}function K(){y++,y<u.length?O(y):Z()}function U(){document.querySelectorAll(".option").forEach(n=>{n.classList.add("disabled"),n.dataset.correct==="true"&&n.classList.add("correct")}),o.disabled=!1,o.classList.remove("disabled")}function Z(){z=Date.now();const s=Math.floor((z-B)/1e3),n=Math.floor(s/60),h=s%60,d=`${n.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}`,p=u.length,f=E,k=p-f,T=Math.round(f/p*100);G.textContent=f,R.textContent=p,F.textContent=`${T}%`,$.textContent=f,N.textContent=k,Y.textContent=d,q(),l.classList.remove("hidden")}function H(s){const n=[...s];for(let h=n.length-1;h>0;h--){const d=Math.floor(Math.random()*(h+1));[n[h],n[d]]=[n[d],n[h]]}return n}return V(),W(),{startQuiz:S,showWelcomeScreen:W,showCategoriesScreen:P}}function _(){const c=()=>{const e=document.querySelectorAll(".animate-on-scroll"),t=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate-in"),t.unobserve(o.target))})},{threshold:.1});e.forEach(r=>{t.observe(r),r.style.opacity="0"})},a=()=>{const e=document.querySelectorAll(".parallax");window.addEventListener("scroll",()=>{const t=window.scrollY;e.forEach(r=>{const o=r.dataset.speed||.5;r.style.transform=`translateY(${t*o}px)`})})},i=()=>{const e=document.querySelector(".header");e&&window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("header-scrolled"):e.classList.remove("header-scrolled")})},l=()=>{document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const r=this.getAttribute("href");if(r==="#")return;const o=document.querySelector(r);o&&window.scrollTo({top:o.offsetTop-80,behavior:"smooth"})})})};return c(),a(),i(),l(),{refreshAnimations:c}}function ee(){const c=document.getElementById("theme-switcher"),a=window.matchMedia("(prefers-color-scheme: dark)"),i=localStorage.getItem("theme");function l(){i==="dark"||!i&&a.matches?(document.documentElement.classList.add("dark-theme"),c.classList.add("dark-active")):(document.documentElement.classList.remove("dark-theme"),c.classList.remove("dark-active"))}function e(){document.documentElement.classList.contains("dark-theme")?(document.documentElement.classList.remove("dark-theme"),c.classList.remove("dark-active"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark-theme"),c.classList.add("dark-active"),localStorage.setItem("theme","dark")),document.body.classList.add("theme-transition"),setTimeout(()=>{document.body.classList.remove("theme-transition")},500)}return c.addEventListener("click",e),a.addEventListener("change",t=>{localStorage.getItem("theme")||(t.matches?(document.documentElement.classList.add("dark-theme"),c.classList.add("dark-active")):(document.documentElement.classList.remove("dark-theme"),c.classList.remove("dark-active")))}),l(),{toggleTheme:e,getCurrentTheme:()=>localStorage.getItem("theme")||(a.matches?"dark":"light")}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
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
  `,ee(),_(),X()});
