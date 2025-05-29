
import React from 'react';
import { X, Heart } from 'lucide-react';

interface ReasonsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReasonsModal: React.FC<ReasonsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const reasons = [
    "You always make me laugh", "Your beautiful smile brightens my day", "You're my best friend",
    "Your kindness to everyone", "How you always listen to me", "Your amazing cooking skills",
    "The way you care for our family", "Your incredible strength", "How you never give up",
    "Your creative spirit", "You always know what to say", "Your warm hugs",
    "How you support my dreams", "Your sense of humor", "The way you sing",
    "Your beautiful eyes", "How you make everything fun", "Your loyalty",
    "The way you dance", "Your positive attitude", "How you inspire me",
    "Your gentle heart", "The way you help others", "Your wisdom",
    "How you make me feel special", "Your amazing style", "The way you laugh",
    "Your determination", "How you always believe in me", "Your compassion",
    "The way you make ordinary moments magical", "Your intelligence", "How you care for animals",
    "Your beautiful voice", "The way you light up a room", "Your honesty",
    "How you always have my back", "Your creativity", "The way you love unconditionally",
    "Your patience with me", "How you make the best memories", "Your courage",
    "The way you see the good in everyone", "Your amazing hugs", "How you never judge",
    "Your thoughtfulness", "The way you make me proud", "Your resilience",
    "How you always know how to cheer me up", "Your beautiful heart", "The way you care",
    "Your sense of adventure", "How you make me a better person", "Your grace",
    "The way you handle challenges", "Your empathy", "How you make everything better",
    "Your wonderful personality", "The way you love your friends", "Your optimism",
    "How you always find solutions", "Your amazing energy", "The way you inspire others",
    "Your genuine nature", "How you make me feel loved", "Your strength in tough times",
    "The way you celebrate small victories", "Your beautiful soul", "How you never pretend",
    "Your ability to forgive", "The way you make everyone feel welcome", "Your enthusiasm",
    "How you always try your best", "Your loving nature", "The way you care for details",
    "Your amazing memory", "How you make holidays special", "Your gentle touch",
    "The way you understand me", "Your protective nature", "How you make me laugh until I cry",
    "Your incredible talent", "The way you love life", "Your generous spirit",
    "How you always share", "Your beautiful mind", "The way you make everything an adventure",
    "Your loving words", "How you remember important things", "Your amazing spirit",
    "The way you make me feel safe", "Your incredible friendship", "How you love deeply",
    "Your wonderful imagination", "The way you make dreams come true", "Your pure heart",
    "How you always encourage me", "Your amazing presence", "The way you make life beautiful",
    "Your unconditional love", "How you're simply perfect", "Your irreplaceable place in my heart",
    "The way you complete our family", "Your amazing sisterhood", "How you're my twin, my other half",
    "Your perfect timing in everything", "The way you make birthdays special", "How you're simply the best sister ever",
    "Your love that knows no bounds", "How you make every day brighter", "Because you're YOU! 💕"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-800 font-serif flex items-center gap-2">
            <Heart className="w-8 h-8 text-pink-500" />
            100 Reasons Why I Love You
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover-scale"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold text-sm">{index + 1}.</span>
                <p className="text-purple-800 text-sm font-medium">{reason}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="text-4xl mb-4">💕👯‍♀️💕</div>
          <p className="text-purple-800 font-serif text-xl italic">
            Happy Birthday to my amazing twin sister!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReasonsModal;
