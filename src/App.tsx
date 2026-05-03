import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { VideoGrid } from './components/VideoGrid';
import { mockVideos, type Video } from './data/mockVideos';
import { Settings, X } from 'lucide-react';

export type Language = 'en' | 'fr';

function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('youtube_api_key') || '');
  
  useEffect(() => {
    // Initial load: either use mock or fetch if API key exists
    const init = async () => {
      if (apiKey) {
        await handleRefresh();
      } else {
        setVideos(mockVideos);
        setLoading(false);
      }
    };
    init();
  }, []);

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('youtube_api_key', key);
  };

  const handleRefresh = async () => {
    if (!apiKey) {
      alert(lang === 'fr' 
        ? "Veuillez configurer votre clé API YouTube dans les paramètres (bouton engrenage)." 
        : "Please configure your YouTube API key in settings (gear button).");
      setShowSettings(true);
      return;
    }

    setIsRefreshing(true);
    setLoading(true);

    try {
      const searchTerms = ["quantum mechanics", "quantum computing", "quantum entanglement explanation", "string theory", "quantum physics documentary"];
      const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
      
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(randomTerm)}&type=video&videoSyndicated=true&key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('API Error');
      }
      
      const data = await response.json();
      
      const newVideos: Video[] = data.items.map((item: any, index: number) => ({
        id: item.id.videoId,
        originalTitle: item.snippet.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        editorialTitle: {
          en: item.snippet.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
          fr: item.snippet.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'")
        },
        editorialChoice: {
          en: item.snippet.description || "Freshly curated from YouTube's latest quantum content.",
          fr: item.snippet.description || "Sélection fraîche du dernier contenu quantique sur YouTube."
        },
        category: index % 3 === 0 ? 'Computing' : (index % 2 === 0 ? 'Biology' : 'Physics'), // Randomish category
        youtubeUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
        channelName: item.snippet.channelTitle,
        channelAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.snippet.channelTitle}`,
        views: 'Live',
        publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
        duration: 'YouTube'
      }));

      setVideos(newVideos);
    } catch (error) {
      console.error(error);
      alert(lang === 'fr' ? "Erreur de connexion à l'API YouTube. Vérifiez votre clé." : "YouTube API connection error. Check your key.");
      // Fallback to mock
      if (videos.length === 0) setVideos(mockVideos);
    } finally {
      setIsRefreshing(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex">
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-8 max-w-lg w-full shadow-2xl relative animate-fade-in">
            <button onClick={() => setShowSettings(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors">
              <X size={24} />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-sidebar rounded-full text-white">
                <Settings size={24} />
              </div>
              <h2 className="text-2xl font-black text-brand-sidebar font-serif">
                {lang === 'fr' ? 'Configuration API' : 'API Settings'}
              </h2>
            </div>
            
            <p className="text-zinc-500 mb-6 font-medium">
              {lang === 'fr' 
                ? "Pour chercher de vraies vidéos en direct, vous devez utiliser une clé API YouTube Data v3 (gratuite). Sans clé, l'application utilise une base de données statique Premium."
                : "To fetch live videos, you need a free YouTube Data v3 API key. Without it, the app uses a premium static database."}
            </p>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider">
                YouTube API Key
              </label>
              <input 
                type="password" 
                value={apiKey}
                onChange={(e) => saveApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 outline-none focus:border-brand-sidebar focus:ring-1 focus:ring-brand-sidebar transition-all"
              />
            </div>

            <button 
              onClick={() => {
                setShowSettings(false);
                if (apiKey) handleRefresh();
              }}
              className="mt-8 w-full bg-brand-sidebar text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg shadow-black/10"
            >
              {lang === 'fr' ? 'Sauvegarder & Rafraîchir' : 'Save & Refresh'}
            </button>
          </div>
        </div>
      )}

      {/* Navigation Latérale */}
      <Sidebar lang={lang} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col relative">
        <TopBar 
          lang={lang} 
          setLang={setLang} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          onRefresh={handleRefresh}
          onSettingsClick={() => setShowSettings(true)}
          isRefreshing={isRefreshing}
        />
        
        {/* The Premium White Container */}
        <div className="flex-1 m-8 mb-12 bg-white rounded-48 shadow-premium overflow-hidden flex flex-col ring-1 ring-black/[0.02] animate-fade-in">
            <div className="px-12 py-10 border-b border-zinc-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-20">
                <div>
                    <h2 className="text-[36px] font-extrabold text-brand-sidebar tracking-tightest font-serif">
                      {lang === 'fr' ? 'LE CHOIX ÉDITORIAL' : 'THE EDITORIAL CHOICE'}
                    </h2>
                    <p className="text-zinc-400 font-medium text-[15px] mt-1 pl-1 italic font-sans flex items-center gap-2">
                      {lang === 'fr' 
                        ? (apiKey ? '🟢 Live YouTube Data (API v3)' : '🔴 Base statique Premium (API non configurée)')
                        : (apiKey ? '🟢 Live YouTube Data (API v3)' : '🔴 Premium static base (API not configured)')}
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
                <VideoGrid lang={lang} searchQuery={searchQuery} activeCategory={activeCategory} videos={videos} loading={loading} />
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
