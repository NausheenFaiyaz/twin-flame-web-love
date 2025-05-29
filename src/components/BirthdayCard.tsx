
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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-yellow-100 relative overflow-hidden">
      {/* Animated Background Elements with uploaded images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-elements">
          <div className="floating-item floating-1">
            <img src="/lovable-uploads/dcfb8231-23a7-4d4a-b0e3-e8bf8a1d83fd.png" alt="Balloons" className="w-8 h-8" />
          </div>
          <div className="floating-item floating-2">
            <img src="/lovable-uploads/2f8e3126-85c1-420e-9a7e-725d5b780bd4.png" alt="Teddy Bear" className="w-10 h-10" />
          </div>
          <div className="floating-item floating-3">
            <img src="/lovable-uploads/8af362af-8288-49b6-b6a9-6a9b131941be.png" alt="Bow" className="w-8 h-8" />
          </div>
          <div className="floating-item floating-4">
            <img src="/lovable-uploads/b58ce303-596d-4101-998a-88856fb07f05.png" alt="Hearts" className="w-8 h-8" />
          </div>
          <div className="floating-item floating-5">
            <img src="/lovable-uploads/99453c98-67bd-4244-939d-9104a7ffdd9e.png" alt="Party Face" className="w-8 h-8" />
          </div>
          <div className="floating-item floating-6">
            <img src="/lovable-uploads/9a29f75b-5385-4892-af0b-0dae1dd13f6d.png" alt="Streamers" className="w-8 h-8" />
          </div>
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
            <h1 className="text-4xl md:text-6xl font-bold text-purple-800 font-handwriting">
              HAPPY
            </h1>
            <div className="animate-bounce delay-100">🎀</div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 font-handwriting">
            BIRTHDAY,
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-8 font-handwriting">
            SISTER!
          </h2>
          <div className="flex justify-center mb-8">
            <div className="animate-pulse">🧸</div>
          </div>
          
          {/* Birthday Cake */}
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
            className="interactive-card bg-gradient-to-br from-pink-200 to-pink-100 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-pink-300 cursor-pointer hover-scale transition-all duration-500 hover:shadow-2xl hover:border-pink-400"
            onClick={() => setShowScrapbook(true)}
          >
            <div className="text-center">
              <Camera className="w-8 h-8 text-pink-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pink-800 mb-4 font-handwriting">SCRAPBOOK</h3>
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
            className="interactive-card bg-gradient-to-br from-purple-200 to-purple-100 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-purple-300 cursor-pointer hover-scale transition-all duration-500 hover:shadow-2xl hover:border-purple-400"
            onClick={() => setShowReasons(true)}
          >
            <div className="text-center">
              <Heart className="w-8 h-8 text-purple-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-4 font-handwriting">100 REASONS</h3>
              <h4 className="text-xl font-bold text-purple-800 mb-4 font-handwriting">WHY I LOVE YOU</h4>
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f86fdf0e-caab-4d20-82c8-5d6ea9d756f2.png" 
                  alt="Birthday Card" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Dear Sister Section */}
          <div 
            className="interactive-card bg-gradient-to-br from-yellow-200 to-yellow-100 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-yellow-300 cursor-pointer hover-scale transition-all duration-500 hover:shadow-2xl hover:border-yellow-400"
            onClick={() => setShowLetter(true)}
          >
            <div className="text-center">
              <Mail className="w-8 h-8 text-yellow-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 font-handwriting">DEAR SISTER</h3>
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <img 
                  src="/lovable-uploads/082dfa94-ad2b-43d8-9701-96865d04c2c1.png" 
                  alt="Happy Birthday Message" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>

          {/* Gift Box Section */}
          <div 
            className="interactive-card bg-gradient-to-br from-green-200 to-green-100 backdrop-blur-sm p-6 rounded-3xl shadow-lg border-4 border-green-300 cursor-pointer hover-scale transition-all duration-500 hover:shadow-2xl hover:border-green-400"
            onClick={() => setShowGiftBox(true)}
          >
            <div className="text-center">
              <Gift className="w-8 h-8 text-green-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-handwriting">GIFT BOX</h3>
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
