
import React from 'react';
import { X } from 'lucide-react';

interface ScrapbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScrapbookModal: React.FC<ScrapbookModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-800 font-caveat">📸 Our Scrapbook</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* First photo */}
          <div className="text-center">
            <div className="w-full max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg border-4 border-pink-200">
              <img 
                src="/lovable-uploads/57fda633-c36f-4143-bdff-d534a3e58c40.png" 
                alt="Twin Sisters - Traditional Outfits" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-pink-600">
                <p className="font-caveat italic text-lg">"Sisters in traditional style"</p>
                <p className="text-sm text-gray-600 mt-2 font-cute">Beautiful bond in beautiful attire 💕</p>
              </div>
            </div>
          </div>

          {/* Second photo */}
          <div className="text-center">
            <div className="w-full max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg border-4 border-pink-200">
              <img 
                src="/lovable-uploads/bb0c296c-8643-4341-b00e-ba029fed53ef.png" 
                alt="Twin Sisters - Red Outfits" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-pink-600">
                <p className="font-caveat italic text-lg">"Two hearts, one soul"</p>
                <p className="text-sm text-gray-600 mt-2 font-cute">Making memories together 💕</p>
              </div>
            </div>
          </div>

          {/* Original photo */}
          <div className="text-center">
            <div className="w-full max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg border-4 border-pink-200">
              <img 
                src="/lovable-uploads/0fdfa07b-a924-49a8-ace5-23e9b15e2d0a.png" 
                alt="Twin Sisters Making Heart" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-pink-600">
                <p className="font-caveat italic text-lg">"Heart hands, heart connection"</p>
                <p className="text-sm text-gray-600 mt-2 font-cute">Forever together 💕</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-pink-50 p-4 rounded-xl text-center">
              <div className="text-4xl mb-2">👯‍♀️</div>
              <p className="font-caveat text-purple-800">Twin Power</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl text-center">
              <div className="text-4xl mb-2">💖</div>
              <p className="font-caveat text-purple-800">Sister Love</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <div className="text-4xl mb-2">🎉</div>
              <p className="font-caveat text-purple-800">Celebrations</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl text-center">
              <div className="text-4xl mb-2">🌟</div>
              <p className="font-caveat text-purple-800">Memories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapbookModal;
