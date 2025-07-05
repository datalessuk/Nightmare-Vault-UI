// import { Card, CardContent } from '@/components/ui/card';
import type { IFilmsResponse } from '@/types/tmdb.types';
import React from 'react';
interface FeaturedArticleCardProps {
  article: IFilmsResponse;
}

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  const posterBaseUrl: string = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="relative shadow-lg shadow-gray-900/50 overflow-hidden h-64 md:h-80">
      <img
        src={posterBaseUrl + article?.backdrop_path}
        alt={article?.title}
        className="w-full h-full object-cover block"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white">
        <h2 className="text-xl font-bold">{article?.title}</h2>
        <h3 className="text-md">{article?.release_date}</h3>
      </div>
    </div>
  );
}

export default FeaturedArticleCard;
