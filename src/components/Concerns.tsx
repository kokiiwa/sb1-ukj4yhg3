import React from 'react';
import { ConcernItem } from './ui/ConcernItem';
import { Wind } from 'lucide-react';
import { concernsData } from '../data/concerns';

export const Concerns = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F0F5FC] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            よくあるお悩み
          </span>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Wind className="w-8 h-8 text-[#3A5DAE] rotate-180" />
            <h2 className="text-4xl font-bold">こんなお悩みありませんか？</h2>
            <Wind className="w-8 h-8 text-[#3A5DAE]" />
          </div>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {concernsData.map((concern, index) => (
              <ConcernItem key={index} {...concern} />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="悩む人" 
              className="w-64 h-64 object-cover rounded-full opacity-10 blur-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-5 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};