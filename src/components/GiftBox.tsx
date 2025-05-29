
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GiftBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ isOpen, onClose }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showParty, setShowParty] = useState(false);

  if (!isOpen) return null;

  const handleGiftClick = () => {
    setIsOpened(true);
    setShowParty(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsOpened(false);
      setShowParty(false);
    }, 5000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full animate-scale-in shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-800 font-serif">🎁 Special Gift</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center">
          <div 
            className={`gift-box mx-auto w-48 h-48 cursor-pointer transition-all duration-1000 ${isOpened ? 'gift-opened' : ''}`}
            onClick={handleGiftClick}
          >
            <div className="gift-container relative">
              {/* Gift Box Base */}
              <div className="gift-base w-48 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Box Pattern */}
                <div className="absolute inset-0 bg-purple-500 opacity-30">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                </div>
                
                {/* Vertical Ribbon */}
                <div className={`ribbon-vertical absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 transition-all duration-1000 ${isOpened ? 'ribbon-open-v' : ''}`}>
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                
                {/* Horizontal Ribbon */}
                <div className={`ribbon-horizontal absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-1000 ${isOpened ? 'ribbon-open-h' : ''}`}>
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Gift Box Lid */}
              <div className={`gift-lid absolute -top-4 left-1/2 transform -translate-x-1/2 w-52 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg transition-all duration-1000 ${isOpened ? 'lid-open' : ''}`}>
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"></div>
              </div>
              
              {/* Bow */}
              <div className={`bow absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isOpened ? 'bow-open' : ''}`}>
                <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-6 bg-yellow-700 rounded-sm"></div>
                  <div className="absolute -left-2 top-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform -rotate-45"></div>
                  <div className="absolute -right-2 top-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          
          {!isOpened && (
            <p className="mt-6 text-purple-800 font-serif text-lg">
              Click the gift box to open it! 🎉
            </p>
          )}
          
          {isOpened && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className="text-4xl animate-bounce">🎉</div>
              <p className="text-2xl font-bold text-purple-800 font-serif">
                Surprise!
              </p>
              <p className="text-lg text-purple-600">
                The greatest gift is having you as my sister! 💕
              </p>
              <div className="text-3xl">👯‍♀️✨🎂✨</div>
            </div>
          )}
        </div>
        
        {/* Party Animation Overlay */}
        {showParty && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="party-confetti">
              <div className="confetti-burst confetti-burst-1">🎉</div>
              <div className="confetti-burst confetti-burst-2">🎊</div>
              <div className="confetti-burst confetti-burst-3">✨</div>
              <div className="confetti-burst confetti-burst-4">🎈</div>
              <div className="confetti-burst confetti-burst-5">💖</div>
              <div className="confetti-burst confetti-burst-6">🌟</div>
              <div className="confetti-burst confetti-burst-7">🎉</div>
              <div className="confetti-burst confetti-burst-8">🎊</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftBox;
