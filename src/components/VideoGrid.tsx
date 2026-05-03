import { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import type { Video } from '../data/mockVideos';
import { curationService } from '../services/curationService';
import type { Language } from '../App';

interface VideoGridProps {
  lang: Language;
  searchQuery: string;
  activeCategory: string;
}

export const VideoGrid = ({ lang, searchQuery, activeCategory }: VideoGridProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      // We simulate an API call here but fetch all instead of top 6
      const { mockVideos } = await import('../data/mockVideos');
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setVideos(mockVideos);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  if (loading || videos.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-zinc-200 border-t-brand-sidebar rounded-full animate-spin" />
          <p className="text-zinc-400 font-medium italic">
            {lang === 'fr' ? 'Curation IA en cours...' : 'AI Curation in progress...'}
          </p>
        </div>
      </div>
    );
  }

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const title = video.editorialTitle[lang].toLowerCase();
    const matchesSearch = searchQuery === '' || title.includes(searchLower) || video.originalTitle.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  if (filteredVideos.length === 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-zinc-500 font-medium text-lg">
          {lang === 'fr' ? 'Aucune ressource trouvée.' : 'No resources found.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 p-10 animate-fade-in">
      {filteredVideos.map((video, index) => {
        // First item is always hero
        if (index === 0) {
          return (
            <div key={video.id} className="lg:col-span-8 lg:row-span-2">
              <VideoCard video={video} isHero lang={lang} />
            </div>
          );
        }
        // Others are standard 4-column cards
        return (
          <div key={video.id} className="lg:col-span-4">
            <VideoCard video={video} lang={lang} />
          </div>
        );
      })}
    </div>
  );
};
