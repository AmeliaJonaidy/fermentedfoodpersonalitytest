import React, { useState } from 'react';
import '../styles/Quiz.css'; // Make sure this CSS file is present for Quiz styles

// Combined questions, results, and compatibility data
const allQuestions = [
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

const allResults = {
  Kimchi: {
    name: "The Fiery Pioneer",
    pixelArt: "🌶️",
    description: "Like Kimchi, you are a masterpiece of bold flavors and dynamic energy! You turn ordinary situations into extraordinary opportunities, adding a distinctive kick to any group. You're not afraid to stand out, just like Kimchi's unmistakable taste.",
    characteristics: [
      "Natural trendsetter",
      "Thrives in high-energy environments",
      "Master of transformation and growth",
      "Brings passion and spice",
      "Protective of loved ones",
      "Embraces change with enthusiasm"
    ],
    personalityInsights: {
      strengths: [
        "Your enthusiasm is contagious",
        "You transform negative situations",
        "Authentic self-expression"
      ],
      growthAreas: [
        "Can overwhelm quieter personalities",
        "Balance fiery nature with calm",
        "Patience with slower paces"
      ]
    }
  },
  Miso: {
    name: "The Wise Sage",
    pixelArt: "🫘",
    description: "You embody Miso's profound depth and complexity, gaining wisdom with time. Like Miso, you understand that the best things require patience. Your presence adds depth and umami, bringing out the best in others. You're the friend others seek for aged, perfect insights.",
    characteristics: [
      "Natural mediator, emotionally intelligent",
      "Patient observer, sees beyond surface",
      "Bearer of ancestral wisdom",
      "Creates harmony in any environment",
      "Nurturing mentor for growth",
      "Values authenticity and deep connections"
    ],
    personalityInsights: {
      strengths: [
        "Patience for long-term patterns",
        "Brings out others' hidden potential",
        "Creates calm and stability"
      ],
      growthAreas: [
        "More open to quick changes",
        "Share wisdom more proactively",
        "Avoid overthinking simple situations",
      "Can overwhelm quieter personalities", // Fix: Typo in original `growthAreas`
      "Balance fiery nature with calm",
      "Patience with slower paces"
      ]
    }
  },
  Kombucha: {
    name: "The Effervescent Innovator",
    pixelArt: "🫖",
    description: "You sparkle with Kombucha's vibrant energy, always evolving! Like a SCOBY, you adapt and grow while maintaining your nature. Your personality bubbles with creative ideas and refreshing perspectives, a natural catalyst for positive change.",
    characteristics: [
      "Born experimenter, loves new combinations",
      "Adaptable and resilient",
      "Natural networker, connects groups",
      "Brings refreshing energy to stale situations",
      "Balances health and enjoyment",
      "Embodies ancient wisdom and modern trends"
    ],
    personalityInsights: {
      strengths: [
        "Thrives in changing environments",
        "Naturally brings people together",
        "Innovative spirit inspires others"
      ],
      growthAreas: [
        "Balance between change and stability",
        "Maintain focus on long-term projects",
        "Patience with those who resist change"
      ]
    }
  },
  Sauerkraut: {
    name: "The Steadfast Guardian",
    pixelArt: "🥬",
    description: "You possess the reliable strength and time-tested wisdom of Sauerkraut! Like this traditional ferment, you're a perfect balance of simplicity and complexity. Your straightforward nature and depth of character make you an invaluable presence, maintaining what's truly important.",
    characteristics: [
      "Rock-solid reliability in change",
      "Preserver of traditions and knowledge",
      "Natural protector of community/family",
      "Creates lasting impact via consistent effort",
      "Balances pragmatism with deep wisdom",
      "Maintains purity while adapting"
    ],
    personalityInsights: {
      strengths: [
        "Consistency creates reliability",
        "Excels at preserving and improving",
        "Practical wisdom for simple solutions"
      ],
      growthAreas: [
        "More open to radical changes",
        "Express deeper feelings more openly",
        "Take more risks for growth"
      ]
    }
  }
};

const allCompatibility = {
  Kimchi: {
    bestMatch: "Kombucha",
    bestDescription: "Fiery passion meets effervescent adaptability. Together, you push boundaries, inspire innovation, and transform situations.",
    worstMatch: "Sauerkraut",
    worstDescription: "Your bold energy might overwhelm Sauerkraut's measured approach. This pairing needs careful balance and mutual understanding."
  },
  Miso: {
    bestMatch: "Sauerkraut",
    bestDescription: "A perfect blend of deep wisdom and steady reliability, creating growth and stability for all around you.",
    worstMatch: "Kombucha",
    worstDescription: "Your contemplative depth might find Kombucha's constant evolution challenging. Bridge the gap between stability and change."
  },
  Kombucha: {
    bestMatch: "Kimchi",
    bestDescription: "Adaptable nature harmonizes with passionate energy, creating an exciting atmosphere of innovation and transformation.",
    worstMatch: "Miso", // Fixed typo: EworstMatch -> worstMatch
    worstDescription: "Your quick-changing nature might clash with Miso's patient wisdom. Slow down and appreciate different approaches."
  },
  Sauerkraut: {
    bestMatch: "Miso",
    bestDescription: "Your steady nature forms a perfect foundation for Miso's deep wisdom, creating lasting impact through reliable insight.",
    worstMatch: "Kimchi",
    worstDescription: "Your methodical approach might feel restricted by Kimchi's intense energy. Balance tradition with bold innovation."
  }
};


// Modal Component (moved inside Quiz for this example, but can be separate)
const Modal = ({ title, content, onClose }) => {
  if (!content || (Array.isArray(content) && content.length === 0) || (typeof content === 'object' && Object.keys(content).length === 0)) {
    return null; // Don't render if no content
  }

  // Special handling for compatibility content if it's an object
  const isCompatibilityContent = typeof content === 'object' && !Array.isArray(content);

  return (
    <div className="modal-overlay">
      <div className="modal-content pixel-borders">
        <h3 className="modal-title">{title}</h3>
        {isCompatibilityContent ? (
          <>
            <div className="modal-compatibility-pair">
              <h4>Best Match: {content.bestMatch}</h4>
              <div className="match-icon">{allResults[content.bestMatch].pixelArt}</div>
              <p className="modal-body">{content.bestDescription}</p>
            </div>
            <div className="modal-compatibility-pair">
              <h4>Challenging Match: {content.worstMatch}</h4>
              <div className="match-icon">{allResults[content.worstMatch].pixelArt}</div>
              <p className="modal-body">{content.worstDescription}</p>
            </div>
          </>
        ) : (
          <ul className="modal-list">
            {content.map((item, index) => (
              <li key={index} className="modal-list-item">
                <span className="modal-bullet">•</span> {item}
              </li>
            ))}
          </ul>
        )}
        {/* Close button moved to the bottom */}
        <button onClick={onClose} className="modal-close-button pixel-button">
          X
        </button>
      </div>
    </div>
  );
};


function Quiz({ onReturnToStart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(allQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  // New state for modal
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState([]);

  const handleAnswer = (selected) => {
    setFadeOut(true);
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selected;
      setAnswers(newAnswers);

      if (currentQuestion < allQuestions.length - 1) {
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

    let maxCount = 0;
    let personality = null;
    for (const type in typeCounts) {
      if (typeCounts[type] > maxCount) {
        maxCount = typeCounts[type];
        personality = type;
      }
    }
    // Simple tie-breaking: if no clear majority, pick the first answered type.
    // Fallback to Kimchi if no answers were recorded (e.g., quiz skipped by dev tools).
    if (!personality) {
      personality = allAnswers.find(answer => answer !== null) || "Kimchi";
    }

    setResult({
      ...allResults[personality],
      compatibility: allCompatibility[personality]
    });
    setShowResult(true);
  };

  const restartQuiz = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentQuestion(0);
      setAnswers(new Array(allQuestions.length).fill(null));
      setShowResult(false);
      setResult(null);
      setFadeOut(false);
      onReturnToStart(); // Call the prop function to return to the landing page
    }, 500);
  };

  // Function to open modal
  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setModalTitle('');
    setModalContent([]);
  };


  if (showResult) {
    return (
      <div className={`quiz-container result ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div className="result-header">
          <div className="pixel-art">{result.pixelArt}</div>
          <h2 className="result-title">You are {result.name}!</h2>
        </div>
        
        <p className="result-description">{result.description}</p>

        {/* Clickable section for Characteristics - now with a dedicated button */}
        <div className="result-section-card">
          <h3>Your Key Traits</h3>
          <button
            onClick={() => openModal("Your Key Traits", result.characteristics)}
            className="view-details-button pixel-button"
          >
            View Details
          </button>
        </div>

        {/* Clickable section for Personality Insights - now with dedicated buttons */}
        {result.personalityInsights && (
          <>
            <div className="result-section-card">
              <h3>Your Natural Strengths</h3>
              <button
                onClick={() => openModal("Your Natural Strengths", result.personalityInsights.strengths)}
                className="view-details-button pixel-button"
              >
                View Details
              </button>
            </div>
            <div className="result-section-card">
              <h3>Growth Opportunities</h3>
              <button
                onClick={() => openModal("Growth Opportunities", result.personalityInsights.growthAreas)}
                className="view-details-button pixel-button"
              >
                View Details
              </button>
            </div>
          </>
        )}

        {/* Clickable section for Compatibility - now with a dedicated button */}
        <div className="result-section-card">
          <h3>Fermentation Compatibility</h3>
          <button
            onClick={() => openModal("Fermentation Compatibility", result.compatibility)}
            className="view-details-button pixel-button"
          >
            View Details
          </button>
        </div>
        
        <div className="result-buttons">
          <button
            onClick={restartQuiz}
            className="restart-button pixel-button"
          >
            Take Quiz Again
          </button>
        </div>

        {/* Render Modal conditionally */}
        {showModal && (
          <Modal
            title={modalTitle}
            content={modalContent}
            onClose={closeModal}
          />
        )}
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
              style={{ width: `${((currentQuestion + 1) / allQuestions.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">Question {currentQuestion + 1} of {allQuestions.length}</p>
        </div>

        <div className="question-dots">
          {Array(allQuestions.length).fill(0).map((_, index) => (
            <span
              key={index}
              className={`question-dot ${index === currentQuestion ? 'active' : ''} ${answers[index] ? 'answered' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="question-container">
        <h2>{allQuestions[currentQuestion].text}</h2>
        <div className="options-container">
          {allQuestions[currentQuestion].options.map((option, index) => (
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