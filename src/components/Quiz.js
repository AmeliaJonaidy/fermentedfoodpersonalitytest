import React, { useState } from 'react';
import '../styles/Quiz.css';

const compatibility = {
  Kimchi: {
    bestMatch: "Kombucha",
    worstMatch: "Miso",
    bestDescription: "Your fiery energy pairs perfectly with Kombucha's effervescent spirit, creating dynamic and exciting interactions!",
    worstDescription: "Miso's contemplative nature might find your intensity overwhelming at times."
  },
  Miso: {
    bestMatch: "Sauerkraut",
    worstMatch: "Kimchi",
    bestDescription: "Your deep wisdom resonates with Sauerkraut's steadfast nature, forming a strong foundation of mutual understanding.",
    worstDescription: "Kimchi's explosive energy might disrupt your peaceful contemplation."
  },
  Kombucha: {
    bestMatch: "Kimchi",
    worstMatch: "Sauerkraut",
    bestDescription: "Your adaptable nature complements Kimchi's passionate energy, sparking creativity and adventure!",
    worstDescription: "Sauerkraut's structured approach might feel too constraining for your free spirit."
  },
  Sauerkraut: {
    bestMatch: "Miso",
    worstMatch: "Kombucha",
    bestDescription: "Your methodical nature aligns perfectly with Miso's patient wisdom, creating lasting harmony.",
    worstDescription: "Kombucha's spontaneity might challenge your preference for order and structure."
  }
};

const questions = [
  {
    id: 1,
    text: "How do you approach learning new recipes or cooking techniques?",
    options: [
      { text: "Dive in with passion, experimenting boldly with flavors", type: "Kimchi" },
      { text: "Study traditional methods first, understanding the foundations", type: "Miso" },
      { text: "Mix classic techniques with modern twists", type: "Kombucha" },
      { text: "Follow tried-and-true methods precisely", type: "Sauerkraut" }
    ]
  },
  {
    id: 2,
    text: "In a group of friends sharing a meal, you're most likely to:",
    options: [
      { text: "Encourage everyone to try something adventurous", type: "Kimchi" },
      { text: "Share stories about the food's cultural significance", type: "Miso" },
      { text: "Create a fun, lively atmosphere of exploration", type: "Kombucha" },
      { text: "Ensure everyone has what they need and feels comfortable", type: "Sauerkraut" }
    ]
  },
  {
    id: 3,
    text: "How do you prefer to spend your time developing your skills?",
    options: [
      { text: "Intense bursts of focused practice and experimentation", type: "Kimchi" },
      { text: "Long periods of careful observation and refinement", type: "Miso" },
      { text: "Collaborative sessions sharing ideas and techniques", type: "Kombucha" },
      { text: "Systematic practice following established methods", type: "Sauerkraut" }
    ]
  },
  {
    id: 4,
    text: "When faced with an unexpected change in plans, you typically:",
    options: [
      { text: "See it as an exciting opportunity for something new", type: "Kimchi" },
      { text: "Reflect on the deeper meaning and adjust mindfully", type: "Miso" },
      { text: "Adapt quickly and help others embrace the change", type: "Kombucha" },
      { text: "Create a practical alternative plan", type: "Sauerkraut" }
    ]
  },
  {
    id: 5,
    text: "Your ideal learning environment would be:",
    options: [
      { text: "A dynamic workshop with hands-on experimentation", type: "Kimchi" },
      { text: "An intimate masterclass with a respected expert", type: "Miso" },
      { text: "An interactive group session with idea sharing", type: "Kombucha" },
      { text: "A structured course with clear objectives", type: "Sauerkraut" }
    ]
  },
  {
    id: 6,
    text: "How do you typically express your creativity?",
    options: [
      { text: "Through bold, innovative combinations and ideas", type: "Kimchi" },
      { text: "By adding subtle, meaningful touches to tradition", type: "Miso" },
      { text: "Creating fresh interpretations of classic concepts", type: "Kombucha" },
      { text: "Perfecting and refining established techniques", type: "Sauerkraut" }
    ]
  },
  {
    id: 7,
    text: "When sharing your knowledge with others, you prefer to:",
    options: [
      { text: "Inspire them to push boundaries and experiment", type: "Kimchi" },
      { text: "Share deep insights from your experience", type: "Miso" },
      { text: "Create an engaging, interactive learning experience", type: "Kombucha" },
      { text: "Provide clear, step-by-step guidance", type: "Sauerkraut" }
    ]
  },
  {
    id: 8,
    text: "Your approach to maintaining traditions is:",
    options: [
      { text: "Reimagining them with contemporary twists", type: "Kimchi" },
      { text: "Preserving their essence while adding subtle depth", type: "Miso" },
      { text: "Blending old and new in harmonious ways", type: "Kombucha" },
      { text: "Carefully maintaining their authentic form", type: "Sauerkraut" }
    ]
  },
  {
    id: 9,
    text: "When collaborating on a project, you contribute best by:",
    options: [
      { text: "Bringing energy and innovative ideas", type: "Kimchi" },
      { text: "Offering thoughtful insights and perspective", type: "Miso" },
      { text: "Facilitating group harmony and creativity", type: "Kombucha" },
      { text: "Ensuring quality and consistency", type: "Sauerkraut" }
    ]
  },
  {
    id: 10,
    text: "Your ideal way of influencing others is through:",
    options: [
      { text: "Inspiring them with passionate energy", type: "Kimchi" },
      { text: "Sharing wisdom gained through experience", type: "Miso" },
      { text: "Creating inclusive, positive environments", type: "Kombucha" },
      { text: "Demonstrating reliable, proven methods", type: "Sauerkraut" }
    ]
  }
];

const results = {
  Kimchi: {
    name: "Kimchi",
    description: "You're bold, vibrant, and full of energy! Like the fiery Korean staple, you bring heat and excitement to any situation. Your passion is contagious, and you're not afraid to stand out with your unique flavor. Just as kimchi transforms ordinary ingredients into something extraordinary, you have the power to elevate any situation with your dynamic presence.",
    characteristics: [
      "Bold and adventurous spirit",
      "Natural leader with spicy charisma",
      "Transformative influence on others",
      "Strong cultural appreciation"
    ],
    pixelArt: "🌶️"
  },
  Miso: {
    name: "Miso",
    description: "You're deep, complex, and wonderfully nuanced. Like the ancient Japanese ferment, you get better with time, and people appreciate your subtle but profound influence. Your wisdom comes from patience and deep reflection, and like miso's umami, you add depth to everything you touch.",
    characteristics: [
      "Deep emotional intelligence",
      "Patient and nurturing nature",
      "Rich in wisdom and experience",
      "Subtle yet powerful presence"
    ],
    pixelArt: "🫘"
  },
  Kombucha: {
    name: "Kombucha",
    description: "You're effervescent and adaptable! Like the fizzy fermented tea, you bring a refreshing and unique perspective to life. Your bubbly personality helps others see things in new ways, and you're constantly evolving while maintaining your essential nature. You're the perfect blend of tradition and innovation.",
    characteristics: [
      "Naturally energetic and uplifting",
      "Adaptable and ever-evolving",
      "Social catalyst and connector",
      "Health-conscious and balanced"
    ],
    pixelArt: "🫖"
  },
  Sauerkraut: {
    name: "Sauerkraut",
    description: "You're reliable, sharp, and straightforward. Like this time-tested European staple, you have a distinctive character that adds clarity and zest to any situation. Your practical approach and consistent nature make you a trusted friend and advisor. You preserve what's important while cutting through life's complexity with refreshing directness.",
    characteristics: [
      "Clear and direct communication",
      "Strong sense of tradition",
      "Reliable and consistent nature",
      "Natural preservationist of wisdom"
    ],
    pixelArt: "🥬"
  }
};

function Quiz() {  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnswer = (selected) => {
    setFadeOut(true);
    setTimeout(() => {
      const newAnswers = [...answers, selected];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
      }
      setFadeOut(false);
    }, 500);
  };

  const calculateResult = (allAnswers) => {
    const typeCounts = allAnswers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const personality = Object.entries(typeCounts).reduce((a, b) => 
      typeCounts[a] > typeCounts[b] ? a : b
    )[0];

    setResult(results[personality]);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentQuestion(-1);
      setAnswers([]);
      setShowResult(false);
      setResult(null);
      setFadeOut(false);
    }, 500);
  };
  if (currentQuestion === -1) {
    return (
      <div className={`quiz-container question ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div className="question-container">
          <h2>Question {currentQuestion + 2}</h2>
          <p>{questions[0].text}</p>
        </div>
        <div className="options-container">
          {questions[0].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="progress-bar">
          <div 
            className="progress"
            style={{ width: `${(1 / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (      <div className={`quiz-container result ${fadeOut ? 'fade-out' : 'fade-in'}`}>
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
        <button onClick={restartQuiz} className="restart-button pixel-button">
          Take Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div className={`quiz-container question ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <div className="question-container">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].text}</p>
      </div>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.type)}
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div 
          className="progress"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Quiz;
