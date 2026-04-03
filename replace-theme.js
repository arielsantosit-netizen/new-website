const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ClassRegistrationForm.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Global replacements for dark mode -> light elegant mode
content = content.replace(/bg-zinc-900\/60 rounded-2xl border border-gray-800/g, 'bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]');
content = content.replace(/bg-zinc-900/g, 'bg-gray-50/50');
content = content.replace(/bg-zinc-800\/50/g, 'bg-gray-50 border border-gray-100');
content = content.replace(/bg-zinc-800/g, 'bg-gray-100');
content = content.replace(/bg-black\/50/g, 'bg-gray-50');
content = content.replace(/border-gray-800/g, 'border-gray-200');
content = content.replace(/border-gray-700/g, 'border-gray-200');
content = content.replace(/border-gray-600/g, 'border-gray-300');
content = content.replace(/text-white/g, 'text-[#111]');
content = content.replace(/text-gray-300/g, 'text-gray-600');
content = content.replace(/text-gray-400/g, 'text-gray-500');
content = content.replace(/text-red-500/g, 'text-pink-500');
content = content.replace(/text-red-400/g, 'text-pink-600');
content = content.replace(/text-red-300/g, 'text-pink-400');
content = content.replace(/ring-red-600/g, 'ring-[#111]');
content = content.replace(/border-red-600/g, 'border-[#111]');
content = content.replace(/bg-red-600/g, 'bg-[#111]');
content = content.replace(/bg-red-700/g, 'bg-[#333]');
content = content.replace(/hover:bg-red-700/g, 'hover:bg-[#333]');
content = content.replace(/hover:text-red-400/g, 'hover:text-[#111]');
content = content.replace(/hover:text-red-300/g, 'hover:text-[#333]');
content = content.replace(/hover:bg-zinc-800/g, 'hover:bg-gray-100');
content = content.replace(/hover:bg-zinc-700/g, 'hover:bg-gray-200');
content = content.replace(/bg-zinc-700/g, 'bg-gray-200');
content = content.replace(/from-red-600 to-red-700/g, 'from-[#111] to-[#333]');
content = content.replace(/hover:from-red-700 hover:to-red-800/g, 'hover:from-[#333] hover:to-[#111]');
content = content.replace(/shadow-red-600\/50/g, 'shadow-gray-300/50');

// Replace general section layout with gradients
content = content.replace(
  /<section className="min-h-screen pt-24 px-6 py-12 lg:py-20">/,
  `<section className="min-h-screen pt-24 px-6 py-12 lg:py-20 bg-[#fdfdfd] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-50/60 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50/60 to-transparent blur-[120px] rounded-full pointer-events-none" />`
);

// Font replacing
content = content.replace(/font-bold/g, 'font-serif-elegant font-medium');
content = content.replace(/font-semibold/g, 'font-serif-elegant font-medium');

// Stepper adjustments (since red-600 -> #111 might have broken some specific stepper logic)
content = content.replace(/bg-\[\#111\] text-\[\#111\]/g, 'bg-[#111] text-white'); // Fix text color when bg is #111
content = content.replace(/text-\[\#111\] font-serif-elegant font-medium text-sm flex-1/g, 'text-[#111] font-serif-elegant font-medium text-sm flex-1'); 

// Button text color
content = content.replace(/bg-\[\#111\] text-\[\#111\] font-serif-elegant font-medium rounded-lg hover:bg-\[\#333\]/g, 'bg-[#111] text-white font-serif-elegant font-medium rounded-lg hover:bg-[#333]');

content = content.replace(/The "Magic": AI & App Dev Basics/g, 'The "Magic": AI & App Dev Basics');

// Because text-white was universally replaced with text-[#111], elements that now have bg-[#111] need text-white
// E.g., buttons
content = content.replace(/className="w-full h-14 bg-\[\#111\] text-\[\#111\]/g, 'className="w-full h-14 bg-[#111] text-white');
content = content.replace(/className="px-6 py-3 bg-\[\#111\] text-\[\#111\]/g, 'className="px-6 py-3 bg-[#111] text-white');
content = content.replace(/text-\[\#111\] font-serif-elegant font-medium rounded-xl hover:from-\[\#333\] hover:to-\[\#111\] transition-all duration-300 shadow-lg hover:shadow-gray-300\/50 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2/g, 'text-white font-serif-elegant font-medium rounded-xl hover:from-[#333] hover:to-[#111] transition-all duration-300 shadow-lg hover:shadow-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2');
content = content.replace(/className="px-3 py-1.5 bg-gradient-to-r from-\[\#111\] to-\[\#333\] text-\[\#111\]/g, 'className="px-3 py-1.5 bg-gradient-to-r from-[#111] to-[#333] text-white');

// For the Stepper
content = content.replace(/bg-\[\#111\] text-\[\#111\]/g, 'bg-[#111] text-white');
content = content.replace(/bg-\[\#111\]\/20/g, 'bg-gray-100/50');
content = content.replace(/text-pink-600/g, 'text-gray-500'); // the completed step colors
content = content.replace(/text-pink-400/g, 'text-pink-500'); 
content = content.replace(/border-\[\#111\]\/40/g, 'border-gray-200');

// Stepper header
content = content.replace(/1. Overview/g, '1. Overview');

fs.writeFileSync(filePath, content);
console.log('Update complete!');
