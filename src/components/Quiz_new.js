import React, { useState } from 'react';
import '../styles/Quiz.css';

const questions = [
  {
    text: "How do you approach new experiences?",
    options: [
      { text: "With fiery enthusiasm and bold curiosity", type: "Kimchi" },
      { text: "With patient wisdom and careful consideration", type: "Miso" },
      { text: "With free-spirited adaptability", type: "Kombucha" },
      { text: "With steady reliability and tradition", type: "Sauerkraut" }
    ]
  },
  {
    text: "What's your ideal way to spend a weekend?",
    options: [
      { text: "Exploring new and exciting activities", type: "Kimchi" },
      { text: "Quietly reflecting and learning", type: "Miso" },
      { text: "Going with the flow and being spontaneous", type: "Kombucha" },
      { text: "Following comfortable routines", type: "Sauerkraut" }
    ]
  },
  // Add more questions here...
];

const compatibility = {
  Kimchi: {
    bestMatch: "Kombucha",
    bestDescription: "Your dynamic energy perfectly complements Kombucha's adaptable nature, creating an exciting and innovative partnership.",
    worstMatch: "Sauerkraut",
    worstDescription: "While both are fermented cabbage dishes, your bold approach might overwhelm Sauerkraut's steady traditional nature."
  },
  Miso: {
    bestMatch: "Sauerkraut",
    bestDescription: "Your shared appreciation for tradition and patience creates a deep, meaningful connection.",
    worstMatch: "Kombucha",
    worstDescription: "Your contemplative nature might find Kombucha's ever-changing personality challenging to understand."
  },
  // Add more compatibility matches...
};

const results = {
  Kimchi: {
    name: "The Fiery Pioneer",
    pixelArt: "🌶️",
    description: "You are bold, vibrant, and full of passionate energy! Like Kimchi, you bring heat and excitement to everything you do. Your dynamic personality transforms ordinary moments into extraordinary experiences.",
    characteristics: [
      "Enthusiastic and energetic",
      "Bold and adventurous",
      "Creative and innovative",
      "Natural leader with strong presence",
      "Passionate about life and experiences"
    ]
  },
  Miso: {
    name: "The Wise Sage",
    pixelArt: "🫘",
    description: "Deep, complex, and thoughtful, you embody the wisdom that comes with patience and experience. Like Miso, you add depth and richness to the lives of those around you.",
    characteristics: [
      "Patient and contemplative",
      "Rich in wisdom and experience",
      "Deeply nurturing",
      "Complex and multifaceted",
      "Steadfast and reliable"
    ]
  },
  // Add more detailed results...
};

function Quiz({ onReturnToStart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnswer = (selected) => {
    setFadeOut(true);
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selected;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
      }
      setFadeOut(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setFadeOut(false);
      }, 500);
    }
  };

  const calculateResult = (allAnswers) => {
    const typeCounts = allAnswers.reduce((acc, answer) => {
      if (answer) {
        acc[answer] = (acc[answer] || 0) + 1;
      }
      return acc;
    }, {});

    const personality = Object.entries(typeCounts).reduce((a, b) => 
      typeCounts[a] > typeCounts[b] ? a : b
    )[0];

    setResult({
      ...results[personality],
      compatibility: compatibility[personality]
    });
    setShowResult(true);
  };

  if (showResult) {
    return (
      <div className={`quiz-container result ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div className="result-header">
          <div className="pixel-art">{result.pixelArt}</div>
          <h2 className="result-title">You are {result.name}!</h2>
        </div>
        <div className="result-content">
          <p className="result-description">{result.description}</p>
          <div className="characteristics">
            <h3>Your Key Traits:</h3>
            <ul className="trait-list">
              {result.characteristics.map((trait, index) => (
                <li key={index} className="trait-item">
                  <span className="trait-bullet">✦</span> {trait}
                </li>
              ))}
            </ul>
          </div>
          <div className="compatibility-section">
            <h3>Fermentation Compatibility</h3>
            <div className="compatibility-container">
              <div className="compatibility best-match">
                <h4>Best Match: {compatibility[result.name].bestMatch}</h4>
                <p>{compatibility[result.name].bestDescription}</p>
                <div className="match-icon">{results[compatibility[result.name].bestMatch].pixelArt}</div>
              </div>
              <div className="compatibility worst-match">
                <h4>Challenging Match: {compatibility[result.name].worstMatch}</h4>
                <p>{compatibility[result.name].worstDescription}</p>
                <div className="match-icon">{results[compatibility[result.name].worstMatch].pixelArt}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="result-buttons">
          <button 
            onClick={() => onReturnToStart()} 
            className="return-button pixel-button"
          >
            Return to Start
          </button>
          <button 
            onClick={onReturnToStart} 
            className="restart-button pixel-button"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`quiz-container question ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <div className="quiz-header">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        
        <div className="question-dots">
          {Array(questions.length).fill(0).map((_, index) => (
            <span
              key={index}
              className={`question-dot ${index === currentQuestion ? 'active' : ''} ${answers[index] ? 'answered' : ''}`}
            />
          ))}
        </div>
      </div>
      
      <div className="question-container">
        <h2>{questions[currentQuestion].text}</h2>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className={`option-button ${answers[currentQuestion] === option.type ? 'selected' : ''}`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          className={`nav-button previous ${currentQuestion === 0 ? 'disabled' : ''}`}
          disabled={currentQuestion === 0}
        >
          <span className="nav-icon">←</span> Previous
        </button>
      </div>
    </div>
  );
}

export default Quiz;
