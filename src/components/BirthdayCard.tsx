
import React, { useState } from 'react';
import { Gift, Heart, Camera, Mail } from 'lucide-react';
import ScrapbookModal from './ScrapbookModal';
import ReasonsModal from './ReasonsModal';
import LetterModal from './LetterModal';
import GiftBox from './GiftBox';

const BirthdayCard = () => {
  const [showScrapbook, setShowScrapbook] = useState(false);
  const [showReasons, setShowReasons] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showGiftBox, setShowGiftBox] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-hearts">
          <div className="heart heart-1">💖</div>
          <div className="heart heart-2">💕</div>
          <div className="heart heart-3">💝</div>
          <div className="heart heart-4">🎀</div>
          <div className="heart heart-5">🧸</div>
          <div className="heart heart-6">🎁</div>
        </div>
        <div className="confetti">
          <div className="confetti-piece confetti-1"></div>
          <div className="confetti-piece confetti-2"></div>
          <div className="confetti-piece confetti-3"></div>
          <div className="confetti-piece confetti-4"></div>
          <div className="confetti-piece confetti-5"></div>
          <div className="confetti-piece confetti-6"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="animate-bounce">🎁</div>
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 font-serif">
              HAPPY
            </h1>
            <div className="animate-bounce delay-100">🎀</div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 font-serif">
            BIRTHDAY,
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-8 font-serif">
            SISTER!
          </h2>
          <div className="flex justify-center mb-8">
            <div className="animate-pulse">🧸</div>
          </div>
          
          {/* Birthday Cake - Using your uploaded image */}
          <div className="flex justify-center mb-12">
            <div className="birthday-cake animate-scale-in">
              <img 
                src="/lovable-uploads/e87f65a3-6c22-417d-b2c4-c68e404e222f.png" 
                alt="Birthday Cake" 
                className="w-32 h-32 mx-auto animate-bounce"
              />
            </div>
          </div>
        </div>

        {/* Interactive Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Scrapbook Section */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowScrapbook(true)}
          >
            <div className="text-center">
              <Camera className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-serif">SCRAPBOOK</h3>
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg border-4 border-white shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/0fdfa07b-a924-49a8-ace5-23e9b15e2d0a.png" 
                  alt="Twin Sisters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-pink-500">🍓</div>
            </div>
          </div>

          {/* 100 Reasons Section - Using your uploaded image */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowReasons(true)}
          >
            <div className="text-center">
              <Heart className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-serif">100 REASONS</h3>
              <h4 className="text-xl font-bold text-purple-800 mb-4 font-serif">WHY I LOVE YOU</h4>
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f86fdf0e-caab-4d20-82c8-5d6ea9d756f2.png" 
                  alt="Birthday Card" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Dear Sister Section - Using your uploaded image */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowLetter(true)}
          >
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-serif">DEAR SISTER</h3>
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <img 
                  src="/lovable-uploads/082dfa94-ad2b-43d8-9701-96865d04c2c1.png" 
                  alt="Happy Birthday Message" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Gift Box Section - Using your uploaded image */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowGiftBox(true)}
          >
            <div className="text-center">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-serif">GIFT BOX</h3>
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b1077ad8-b994-4fac-b997-59fdd6eddb40.png" 
                  alt="Gift Box" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ScrapbookModal isOpen={showScrapbook} onClose={() => setShowScrapbook(false)} />
      <ReasonsModal isOpen={showReasons} onClose={() => setShowReasons(false)} />
      <LetterModal isOpen={showLetter} onClose={() => setShowLetter(false)} />
      <GiftBox isOpen={showGiftBox} onClose={() => setShowGiftBox(false)} />
    </div>
  );
};

export default BirthdayCard;
