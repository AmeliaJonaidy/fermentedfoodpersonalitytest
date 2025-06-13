import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Modal from './components/Modal';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '', icon: '' });

  const openModal = (title, content, icon) => {
    setModalInfo({
      isOpen: true,
      title,
      content,
      icon
    });
  };

  const closeModal = () => {
    setModalInfo(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="App">
      {!showQuiz ? (
        <div className="landing-page">
          <div className="pixel-art-header">
            <div className="pixel-jar-large">
              <div className="pixel-lid"></div>
              <div className="pixel-body">
                <div className="pixel-veggies">
                  <div className="veggie v1"></div>
                  <div className="veggie v2"></div>
                  <div className="veggie v3"></div>
                </div>
                <div className="pixel-bubbles">
                  <div className="bubble b1"></div>
                  <div className="bubble b2"></div>
                  <div className="bubble b3"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="title">Fermented Food Journey</h1>
          <p className="subtitle">Discover the Ancient Art of Fermentation</p>
          <div className="intro-description">
            <p>Embark on a unique journey through the world of fermented foods! Each culture has its own fermented treasures, passed down through generations. Which one matches your soul?</p>
            <div className="ferment-types">
              <div 
                className="ferment-preview" 
                onClick={() => openModal(
                  "Kimchi - The Fiery Soul",
                  "A cornerstone of Korean cuisine, Kimchi is a vibrant fermented masterpiece that captures the essence of transformation. Made through the artful combination of napa cabbage, radishes, and a symphony of spices, it represents the dynamic spirit of change. Beyond its bold flavors and probiotic benefits, Kimchi embodies the passion and resilience of Korean culture, where each family's recipe tells a unique story of tradition and innovation.",
                  "🌶️"
                )}
              >
                <span className="icon">🌶️</span>
                <h3>Kimchi</h3>
                <p>Fiery & Bold</p>
                <div className="preview-details">
                  <p>Click to learn more about this spicy delight!</p>
                </div>
              </div>
              <div 
                className="ferment-preview"
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
              <div 
                className="ferment-preview"
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
              <div 
                className="ferment-preview"
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
            onClick={() => setShowQuiz(true)}
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
        <div className="quiz-container">
          <Quiz />
        </div>
      )}
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
