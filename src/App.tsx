import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { VideoGrid } from './components/VideoGrid';

export type Language = 'en' | 'fr';

function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-brand-bg flex">
      {/* Navigation Latérale */}
      <Sidebar lang={lang} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <TopBar lang={lang} setLang={setLang} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* The Premium White Container with 48px rounded corners */}
        <div className="flex-1 m-8 mb-12 bg-white rounded-48 shadow-premium overflow-hidden flex flex-col ring-1 ring-black/[0.02] animate-fade-in">
            <div className="px-12 py-10 border-b border-zinc-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-20">
                <div>
                    <h2 className="text-[36px] font-extrabold text-brand-sidebar tracking-tightest font-serif">
                      {lang === 'fr' ? 'LE CHOIX ÉDITORIAL' : 'THE EDITORIAL CHOICE'}
                    </h2>
                    <p className="text-zinc-400 font-medium text-[15px] mt-1 pl-1 italic font-sans">
                      {lang === 'fr' 
                        ? 'Sélection quotidienne des 6 meilleures ressources sur la mécanique quantique.' 
                        : 'Daily selection of the 6 best quantum mechanics resources.'}
                    </p>
                </div>
                <div className="bg-zinc-50 px-6 py-3 rounded-2xl flex items-center gap-4">
                    <span className="text-[14px] font-bold text-zinc-400">
                      {lang === 'fr' ? 'DATE DU JOUR' : "TODAY'S DATE"}
                    </span>
                    <span className="text-[16px] font-extrabold text-brand-sidebar">
                      {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <VideoGrid lang={lang} searchQuery={searchQuery} activeCategory={activeCategory} />
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
