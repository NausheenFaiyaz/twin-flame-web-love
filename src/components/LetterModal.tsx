
import React from 'react';
import { X, Heart } from 'lucide-react';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-800 font-serif flex items-center gap-2">
            💌 Dear Sister...
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-4 border-pink-200">
          <div className="font-serif text-purple-800 leading-relaxed space-y-4">
            <div className="text-right text-pink-600 italic mb-4">
              On your special day... 🎂
            </div>
            
            <p className="text-lg">
              My dearest twin sister,
            </p>
            
            <p>
              Today is not just your birthday – it's the celebration of the most amazing person I know. 
              From the moment we came into this world together, you've been my constant companion, 
              my best friend, and my other half.
            </p>
            
            <p>
              Growing up with you has been the greatest gift life could give me. We've shared everything – 
              our secrets, our dreams, our laughter, and even our clothes! 😄 You've been there through 
              every adventure, every challenge, and every milestone.
            </p>
            
            <p>
              Your beautiful heart, your infectious laughter, and your amazing spirit light up every room 
              you enter. You have this incredible ability to make everyone around you feel special and loved. 
              But most importantly, you make me feel complete.
            </p>
            
            <p>
              As we celebrate another year of your wonderful life, I want you to know how grateful I am 
              to have you as my sister, my twin, and my forever friend. You inspire me every single day 
              to be a better person.
            </p>
            
            <p>
              I hope this new year brings you all the happiness, love, and adventures your heart desires. 
              You deserve nothing but the absolute best because that's exactly what you are – the best 
              sister anyone could ask for.
            </p>
            
            <p className="text-lg font-medium">
              Happy Birthday, my amazing twin! Here's to another year of being fabulous together! 🎉✨
            </p>
            
            <div className="text-center mt-6">
              <div className="flex justify-center items-center gap-2 text-2xl">
                💕 👯‍♀️ 💕
              </div>
              <p className="italic text-pink-600 mt-2">
                With all my love and birthday wishes,
              </p>
              <p className="font-bold text-purple-700 mt-2">
                Your twin sister ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
