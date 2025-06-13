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
    id: 1, // Note: id is not used in logic, but kept for completeness
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
    description: "Like the vibrant layers of Kimchi, you are a masterpiece of bold flavors and dynamic energy! Just as this Korean staple transforms through fermentation, you have an incredible ability to turn ordinary situations into extraordinary opportunities. Your presence adds a distinctive kick to any group, making life more exciting for everyone around you. You're not afraid to speak your truth and stand out, just like Kimchi's unmistakable aroma and taste.",
    characteristics: [
      "Natural trendsetter who inspires others to be bold",
      "Thrives in high-energy environments and challenging situations",
      "Master of transformation and personal growth",
      "Brings passion and spice to every interaction",
      "Protective of loved ones like Kimchi's probiotic shield",
      "Creates lasting impressions that strengthen over time",
      "Embraces change with enthusiasm and adaptability"
    ],
    personalityInsights: {
      strengths: [
        "Your enthusiasm is contagious and motivates others",
        "You have a remarkable ability to transform negative situations into positive ones",
        "Your authentic self-expression encourages others to be genuine"
      ],
      growthAreas: [
        "Sometimes your intense energy might overwhelm quieter personalities",
        "Learning to balance your fiery nature with moments of calm",
        "Being patient with those who prefer a slower pace"
      ]
    }
  },
  Miso: {
    name: "The Wise Sage",
    pixelArt: "🫘",
    description: "You embody the profound depth and complexity of Miso, a fermented treasure that gains wisdom with time. Like the various stages of Miso fermentation, you understand that the best things in life require patience and nurturing. Your presence adds depth and umami to social situations, bringing out the best in others just as Miso enhances every dish it touches. You're the friend others seek for guidance, knowing your insights are aged to perfection.",
    characteristics: [
      "Natural mediator with deep emotional intelligence",
      "Patient observer who sees beyond surface appearances",
      "Bearer of ancestral wisdom and timeless knowledge",
      "Creates harmony in any environment you enter",
      "Nurturing mentor who helps others grow",
      "Values authenticity and deep connections",
      "Balances tradition with gentle innovation"
    ],
    personalityInsights: {
      strengths: [
        "Your patience allows you to see long-term patterns others miss",
        "You have an innate ability to bring out others' hidden potential",
        "Your presence creates a sense of calm and stability"
      ],
      growthAreas: [
        "Being more open to quick changes and spontaneity",
        "Sharing your wisdom more proactively",
        "Avoiding overthinking in simple situations"
      ]
    }
  },
  Kombucha: {
    name: "The Effervescent Innovator",
    pixelArt: "🫖",
    description: "You sparkle with the vibrant energy of Kombucha, a living drink that's always evolving! Like the SCOBY that transforms sweet tea into a complex elixir, you have an amazing ability to adapt and grow while maintaining your essential nature. Your personality bubbles with creative ideas and refreshing perspectives, making you a natural catalyst for positive change. You're the perfect blend of traditional wisdom and modern innovation.",
    characteristics: [
      "Born experimenter who loves trying new combinations",
      "Adaptable and resilient in any environment",
      "Natural networker who connects different groups",
      "Brings refreshing energy to stale situations",
      "Balances health and enjoyment in life choices",
      "Transforms negative energy into positive outcomes",
      "Embodies both ancient wisdom and modern trends"
    ],
    personalityInsights: {
      strengths: [
        "Your adaptability helps you thrive in changing environments",
        "You naturally bring people together and create community",
        "Your innovative spirit inspires others to experiment"
      ],
      growthAreas: [
        "Finding balance between change and stability",
        "Maintaining focus on long-term projects",
        "Being patient with those who resist change"
      ]
    }
  },
  Sauerkraut: {
    name: "The Steadfast Guardian",
    pixelArt: "🥬",
    description: "You possess the reliable strength and time-tested wisdom of Sauerkraut! Like this traditional ferment that has nourished generations, you represent the perfect balance of simplicity and complexity. Your straightforward nature, combined with your depth of character, makes you an invaluable presence in any group. Just as Sauerkraut preserves the harvest's bounty, you maintain and protect what's truly important in life.",
    characteristics: [
      "Rock-solid reliability in times of change",
      "Preserver of valuable traditions and knowledge",
      "Natural protector of community and family values",
      "Creates lasting positive impact through consistent effort",
      "Balances pragmatism with deep wisdom",
      "Transforms simple ingredients into valuable resources",
      "Maintains purity of purpose while adapting to change"
    ],
    personalityInsights: {
      strengths: [
        "Your consistency creates a foundation others can rely on",
        "You excel at preserving and improving what works",
        "Your practical wisdom helps others find simple solutions"
      ],
      growthAreas: [
        "Being more open to radical changes when necessary",
        "Expressing your deeper feelings more openly",
        "Taking more risks in pursuit of growth"
      ]
    }
  }
};

const allCompatibility = {
  Kimchi: {
    bestMatch: "Kombucha",
    bestDescription: "Your fiery passion and Kombucha's effervescent adaptability create an explosive combination! Together, you push boundaries and inspire innovation while maintaining deep respect for tradition. This pairing brings out the best in both personalities, creating a dynamic duo that can transform any situation into an opportunity for growth.",
    worstMatch: "Sauerkraut",
    worstDescription: "While you both share fermented wisdom, your bold, spicy energy might overwhelm Sauerkraut's measured approach. This pairing requires careful balance and mutual understanding to work effectively."
  },
  Miso: {
    bestMatch: "Sauerkraut",
    bestDescription: "A perfect blend of deep wisdom and steady reliability. Together, you create an environment of growth and stability that nurtures everyone around you. Your shared appreciation for tradition and patience makes this a powerfully grounding partnership.",
    worstMatch: "Kombucha",
    worstDescription: "Your contemplative depth might find Kombucha's constant evolution challenging. While you can learn from each other, this pairing requires extra effort to bridge the gap between stability and change."
  },
  Kombucha: {
    bestMatch: "Kimchi",
    bestDescription: "Your adaptable nature harmonizes beautifully with Kimchi's passionate energy! Together, you create an exciting atmosphere of innovation and transformation that inspires others. This dynamic pair brings out the best in each other's creative potential.",
    worstMatch: "Miso",
    worstDescription: "Your quick-changing nature might clash with Miso's patient, deeply rooted wisdom. Finding common ground requires slowing down and appreciating different approaches to growth."
  },
  Sauerkraut: {
    bestMatch: "Miso",
    bestDescription: "Your steady nature creates a perfect foundation for Miso's deep wisdom. Together, you form a partnership that combines practical reliability with profound insight, creating lasting positive impact on your community.",
    worstMatch: "Kimchi",
    worstDescription: "Your methodical approach might feel restricted by Kimchi's intense energy. Success in this pairing comes from finding balance between tradition and bold innovation."
  }
};


function Quiz({ onReturnToStart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(allQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

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

    // Find the personality type with the most answers
    let maxCount = 0;
    let personality = null;
    for (const type in typeCounts) {
      if (typeCounts[type] > maxCount) {
        maxCount = typeCounts[type];
        personality = type;
      }
    }
    // Handle ties by picking the first answer's type, or add more complex tie-breaking logic
    if (!personality && allAnswers.length > 0) {
      personality = allAnswers[0];
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

          {/* Only render personality insights if they exist in the result object */}
          {result.personalityInsights && (
            <div className="personality-insights">
              <h3>Personal Growth Insights:</h3>
              <div className="insights-container">
                <div className="strengths">
                  <h4>Your Natural Strengths</h4>
                  <ul className="insight-list">
                    {result.personalityInsights.strengths.map((strength, index) => (
                      <li key={index} className="insight-item">
                        <span className="insight-bullet">★</span> {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="growth-areas">
                  <h4>Growth Opportunities</h4>
                  <ul className="insight-list">
                    {result.personalityInsights.growthAreas.map((area, index) => (
                      <li key={index} className="insight-item">
                        <span className="insight-bullet">✧</span> {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="compatibility-section">
            <h3>Fermentation Compatibility</h3>
            <div className="compatibility-container">
              <div className="compatibility best-match">
                <h4>Best Match: {result.compatibility.bestMatch}</h4>
                <p>{result.compatibility.bestDescription}</p>
                <div className="match-icon">{allResults[result.compatibility.bestMatch].pixelArt}</div>
              </div>
              <div className="compatibility worst-match">
                <h4>Challenging Match: {result.compatibility.worstMatch}</h4>
                <p>{result.compatibility.worstDescription}</p>
                <div className="match-icon">{allResults[result.compatibility.worstMatch].pixelArt}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="result-buttons">
          <button
            onClick={restartQuiz}
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