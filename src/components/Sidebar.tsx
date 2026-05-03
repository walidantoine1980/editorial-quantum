import { Home, Zap, Atom, Brain, Library, Settings, LogOut } from 'lucide-react';
import type { Language } from '../App';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition-all duration-300 group
    ${active ? 'text-white border-r-4 border-white bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
    <Icon size={22} className={`${active ? 'text-white' : 'group-hover:text-white'}`} />
    <span className="font-medium text-[15px]">{label}</span>
  </div>
);

export const Sidebar = ({ lang, activeCategory, setActiveCategory }: { lang: Language, activeCategory: string, setActiveCategory: (c: string) => void }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-brand-sidebar flex flex-col py-8 z-50">
      <div className="px-8 mb-12 flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-white/10">
            <Atom className="text-black" size={20} />
        </div>
        <span className="text-white font-bold text-xl tracking-tight font-serif italic">Quantum Editorial.</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        <SidebarItem icon={Home} label={lang === 'fr' ? 'Découverte' : 'Discovery'} active={activeCategory === 'All'} onClick={() => setActiveCategory('All')} />
        <SidebarItem icon={Zap} label={lang === 'fr' ? 'Informatique' : 'Computing'} active={activeCategory === 'Computing'} onClick={() => setActiveCategory('Computing')} />
        <SidebarItem icon={Atom} label={lang === 'fr' ? 'Physique' : 'Physics'} active={activeCategory === 'Physics'} onClick={() => setActiveCategory('Physics')} />
        <SidebarItem icon={Brain} label={lang === 'fr' ? 'Philosophie' : 'Philosophy'} active={activeCategory === 'Philosophy'} onClick={() => setActiveCategory('Philosophy')} />
        <div className="my-4 h-[1px] bg-white/10 mx-6" />
        <SidebarItem icon={Library} label={lang === 'fr' ? 'Bibliothèque' : 'Library'} />
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <SidebarItem icon={Settings} label={lang === 'fr' ? 'Paramètres' : 'Settings'} />
        <SidebarItem icon={LogOut} label={lang === 'fr' ? 'Déconnexion' : 'Log out'} />
      </div>
    </aside>
  );
};
