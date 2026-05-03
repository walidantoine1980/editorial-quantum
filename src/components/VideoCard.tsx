import { Play, Eye, Clock, Atom } from 'lucide-react';
import type { Video } from '../data/mockVideos';
import type { Language } from '../App';

interface VideoCardProps {
  video: Video;
  isHero?: boolean;
  lang: Language;
}

export const VideoCard = ({ video, isHero = false, lang }: VideoCardProps) => {
  const categoryColors = {
    Computing: 'bg-[#0f172a]',
    Physics: 'bg-[#334155]',
    Biology: 'bg-[#475569]',
    Philosophy: 'bg-[#64748b]',
  };

  const title = video.editorialTitle[lang];
  const summary = video.editorialChoice[lang];

  return (
    <a 
      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.originalTitle)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-white transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 ring-1 ring-black/[0.03] cursor-pointer
      ${isHero ? 'h-[520px]' : 'h-full min-h-[360px]'}`}>
      
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isHero ? 'h-[280px]' : 'h-[180px]'}`}>
        <img 
          src={video.thumbnailUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl">
            <Play fill="black" className="text-black ml-1" size={isHero ? 28 : 20} />
          </div>
        </div>

        {/* Badge Category */}
        <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-white text-[11px] font-extrabold tracking-[0.1em] uppercase shadow-xl backdrop-blur-md flex items-center gap-2 ${categoryColors[video.category] || 'bg-brand-sidebar'}`}>
          <Atom size={12} />
          {video.category}
        </div>

        {/* Duration */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-brand-sidebar text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
            <Clock size={12} />
            {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-zinc-100 overflow-hidden ring-2 ring-white shadow-sm">
                        <img src={video.channelAvatar} alt={video.channelName} />
                    </div>
                    <span className="text-zinc-400 text-[12px] font-bold tracking-tight uppercase">
                        {video.channelName}
                    </span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300 text-[11px] font-extrabold tracking-widest uppercase">
                    <Eye size={14} />
                    {video.views}
                </div>
            </div>

            <h3 className={`font-serif font-black leading-[1.1] tracking-tight text-brand-sidebar group-hover:text-black transition-colors
              ${isHero ? 'text-[32px]' : 'text-[22px]'}`}>
              {title}
            </h3>
        </div>

        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-zinc-100" />
                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-300 uppercase">Editorial Choice</span>
            </div>
            <p className="text-zinc-500 text-[15px] leading-relaxed line-clamp-2 italic font-medium font-sans">
                {summary}
            </p>
        </div>
      </div>
    </a>
  );
};
