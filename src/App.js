import React, { useState } from 'react';
import './App.css'; // Make sure this CSS file is present for App styles
import Quiz from './components/Quiz'; // Assuming Quiz.js is in a 'components' folder

// Modal Component - You can place this in a separate file (e.g., components/Modal.js)
// and import it, but it's included here for a complete, runnable example.
function Modal({ isOpen, onClose, title, content, icon }) {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay"> {/* This will cover the entire screen */}
      <div className="modal-content"> {/* The actual modal box */}
        <div className="modal-header">
          <div className="modal-icon">{icon}</div> {/* Display the emoji icon */}
          <h2 className="modal-title">{title}</h2> {/* Modal title */}
        </div>
        <div className="modal-body">
          <p>{content}</p> {/* Modal description content */}
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close</button> {/* Another close button */}
        </div>
      </div>
    </div>
  );
}


function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  // State to manage the modal's visibility and its content
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '', icon: '' });

  // Function to open the modal with specific content
  const openModal = (title, content, icon) => {
    setModalInfo({
      isOpen: true,
      title,
      content,
      icon
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setModalInfo(prev => ({ ...prev, isOpen: false })); // Only change isOpen to false
  };

  return (
    <div className="App">
      {!showQuiz ? (
        <div className="landing-page">
          <h1 className="title">Fermented Food Journey</h1>
          <p className="subtitle">Discover the Ancient Art of Fermentation</p>
          <div className="intro-description">
            <p>Embark on a unique journey through the world of fermented foods! Each culture has its own fermented treasures, passed down through generations. Which one matches your soul?</p>
            <div className="ferment-types">
              {/* Kimchi Preview */}
              <div
                className="ferment-preview"
                // onClick handler to open the modal with Kimchi's details
                onClick={() => openModal(
                  "Kimchi - The Fiery Soul", // Title for the modal
                  "A cornerstone of Korean cuisine, Kimchi is a vibrant fermented masterpiece that captures the essence of transformation. Made through the artful combination of napa cabbage, radishes, and a symphony of spices, it represents the dynamic spirit of change. Beyond its bold flavors and probiotic benefits, Kimchi embodies the passion and resilience of Korean culture, where each family's recipe tells a unique story of tradition and innovation.", // Content for the modal
                  "🌶️" // Icon for the modal
                )}
              >
                <span className="icon">🌶️</span>
                <h3>Kimchi</h3>
                <p>Fiery & Bold</p>
                <div className="preview-details">
                  <p>Click to learn more about this spicy delight!</p>
                </div>
              </div>

              {/* Miso Preview */}
              <div
                className="ferment-preview"
                // onClick handler to open the modal with Miso's details
                onClick={() => openModal(
                  "Miso - The Wise Elder",
                  "A testament to Japanese culinary wisdom, Miso is a fermented soybean paste that embodies the art of patience. Through months or years of aging, soybeans transform into a deeply complex ingredient that carries the essence of umami. Like a sage elder, Miso represents the accumulation of wisdom over time, adding depth and character to everything it touches. Each variety, from sweet white miso to rich red miso, tells a story of time, tradition, and the subtle power of transformation.",
                  "🫘"
                )}
              >
                <span className="icon">🫘</span>
                <h3>Miso</h3>
                <p>Deep & Wise</p>
                <div className="preview-details">
                  <p>Click to discover this umami treasure!</p>
                </div>
              </div>

              {/* Kombucha Preview */}
              <div
                className="ferment-preview"
                // onClick handler to open the modal with Kombucha's details
                onClick={() => openModal(
                  "Kombucha - The Free Spirit",
                  "An effervescent elixir with roots in ancient China, Kombucha represents the dance between tradition and innovation. This fermented tea, crafted by the symbiotic culture of bacteria and yeast (SCOBY), embodies constant evolution and adaptation. Like a free spirit, it takes on new flavors and characteristics while maintaining its essential nature. Kombucha teaches us about balance, transformation, and the art of blending the old with the new.",
                  "🫖"
                )}
              >
                <span className="icon">🫖</span>
                <h3>Kombucha</h3>
                <p>Bubbly & Free</p>
                <div className="preview-details">
                  <p>Click to explore this fizzy wonder!</p>
                </div>
              </div>

              {/* Sauerkraut Preview */}
              <div
                className="ferment-preview"
                // onClick handler to open the modal with Sauerkraut's details
                onClick={() => openModal(
                  "Sauerkraut - The Steadfast Guardian",
                  "A time-honored European tradition, Sauerkraut is the embodiment of simplicity and reliability. Through the basic process of lacto-fermentation, humble cabbage transforms into a crisp, tangy preserver of nutrition and flavor. It represents the wisdom of preservation, the value of patience, and the beauty of straightforward methods. Like a steadfast guardian, Sauerkraut reminds us that sometimes the most profound transformations come from the simplest practices.",
                  "🥬"
                )}
              >
                <span className="icon">🥬</span>
                <h3>Sauerkraut</h3>
                <p>Sharp & Pure</p>
                <div className="preview-details">
                  <p>Click to uncover this tangy classic!</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="enter-button pixel-button pulsing"
            onClick={() => setShowQuiz(true)} // Button to start the quiz
          >
            Begin Your Fermentation Journey
          </button>
          <div className="pixel-bubbles">
            <div className="bubble b1"></div>
            <div className="bubble b2"></div>
            <div className="bubble b3"></div>
          </div>
        </div>
      ) : (
        // Render the Quiz component when showQuiz is true
        <div className="quiz-container">
          <Quiz onReturnToStart={() => setShowQuiz(false)} /> {/* Pass the function to return to landing page */}
        </div>
      )}
      {/* The Modal component, controlled by modalInfo state */}
      <Modal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        content={modalInfo.content}
        icon={modalInfo.icon}
      />
    </div>
  );
}

export default App;