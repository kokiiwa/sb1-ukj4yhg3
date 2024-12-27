import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ConcernItemProps {
  text: string;
  highlight: string;
}

export const ConcernItem = ({ text, highlight }: ConcernItemProps) => {
  const parts = text.split(highlight);
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1">
      <div className="absolute -top-2 -right-2">
        <CheckCircle className="w-6 h-6 text-[#3A5DAE] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {parts[0]}
        <span className="text-red-500 font-bold">{highlight}</span>
        {parts[1]}
      </p>
    </div>
  );
};