
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
          
          {/* Birthday Cake */}
          <div className="flex justify-center mb-12">
            <div className="birthday-cake animate-scale-in">
              <div className="cake-base bg-pink-300 w-32 h-20 rounded-lg relative shadow-lg">
                <div className="cake-frosting bg-pink-200 w-full h-8 rounded-t-lg absolute -top-2"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="candle bg-white w-2 h-8 rounded-sm relative">
                    <div className="flame w-2 h-3 bg-orange-400 rounded-full absolute -top-2 animate-pulse"></div>
                  </div>
                  <div className="candle bg-white w-2 h-8 rounded-sm relative">
                    <div className="flame w-2 h-3 bg-orange-400 rounded-full absolute -top-2 animate-pulse"></div>
                  </div>
                  <div className="candle bg-white w-2 h-8 rounded-sm relative">
                    <div className="flame w-2 h-3 bg-orange-400 rounded-full absolute -top-2 animate-pulse"></div>
                  </div>
                  <div className="candle bg-white w-2 h-8 rounded-sm relative">
                    <div className="flame w-2 h-3 bg-orange-400 rounded-full absolute -top-2 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
              </div>
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

          {/* 100 Reasons Section */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowReasons(true)}
          >
            <div className="text-center">
              <Heart className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-serif">100 REASONS</h3>
              <h4 className="text-xl font-bold text-purple-800 mb-4 font-serif">WHY I LOVE YOU</h4>
              <div className="w-32 h-24 mx-auto bg-yellow-200 rounded-lg border-4 border-white shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-800">100</div>
                  <div className="text-sm font-bold text-purple-800">REASONS</div>
                  <div className="text-sm font-bold text-purple-800">WHY I</div>
                  <div className="text-sm font-bold text-purple-800">LOVE YOU</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dear Sister Section */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowLetter(true)}
          >
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <div className="w-32 h-24 mx-auto bg-pink-100 rounded-lg border-4 border-white shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-2">💝</div>
                  <div className="text-lg font-bold text-purple-800 italic">Dear Sister..</div>
                  <div className="w-16 h-0.5 bg-purple-400 mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Box Section */}
          <div 
            className="interactive-card bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-200 cursor-pointer hover-scale transition-all duration-300"
            onClick={() => setShowGiftBox(true)}
          >
            <div className="text-center">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <div className="gift-box-preview w-24 h-24 bg-purple-400 rounded-lg relative shadow-lg">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-purple-600 rounded-sm"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 bg-purple-600 rounded-sm"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-purple-600 rounded-full"></div>
                </div>
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
