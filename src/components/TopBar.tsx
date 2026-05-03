import { Search, Bell, Globe, RefreshCw, Settings } from 'lucide-react';
import type { Language } from '../App';

interface TopBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onRefresh: () => void;
  onSettingsClick: () => void;
  isRefreshing: boolean;
}

export const TopBar = ({ lang, setLang, searchQuery, setSearchQuery, onRefresh, onSettingsClick, isRefreshing }: TopBarProps) => {
  return (
    <header className="flex items-center justify-between px-10 py-6 w-full">
      <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md px-5 py-3 rounded-2xl w-full max-w-md ring-1 ring-black/5 shadow-sm">
        <Search size={18} className="text-zinc-400" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={lang === 'fr' ? "Rechercher un sujet..." : "Search for a topic..."}
          className="bg-transparent border-none outline-none text-[15px] text-zinc-600 w-full placeholder:text-zinc-400"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Refresh Button */}
        <button 
          onClick={onRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 bg-brand-sidebar text-white px-4 py-2 rounded-xl shadow-md cursor-pointer hover:bg-black transition-colors disabled:opacity-50"
        >
            <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
            <span className="text-[13px] font-bold uppercase tracking-wider">{lang === 'fr' ? 'Rafraîchir' : 'Refresh'}</span>
        </button>

        {/* Language Switcher */}
        <div 
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 text-zinc-500 bg-white px-3 py-2 rounded-xl shadow-sm cursor-pointer hover:bg-zinc-50 transition-colors ring-1 ring-black/5"
        >
            <Globe size={18} />
            <span className="text-[14px] font-bold uppercase tracking-wider">{lang}</span>
        </div>

        {/* Settings Button */}
        <div 
          onClick={onSettingsClick}
          className="p-2 text-zinc-500 bg-white rounded-xl shadow-sm cursor-pointer hover:text-black hover:bg-zinc-50 transition-colors ring-1 ring-black/5"
          title="API Settings"
        >
          <Settings size={20} />
        </div>

        <div className="relative p-2 text-zinc-500 hover:text-black cursor-pointer transition-colors">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-sidebar rounded-full border-2 border-white" />
        </div>
        
        <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden cursor-pointer ring-2 ring-white shadow-md">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Antoine" alt="User" />
        </div>
      </div>
    </header>
  );
};
