import { useFetchNewsTopics } from '@/hooks/useHorrorNews';
import React from 'react';
import FeaturedArticleCard from '../cards/FeaturedArticleCard';
function DashBoard() {
  const articles = useFetchNewsTopics() || [];

  return (
    <div>
      <div>
        <h1 className="text-red-600 font-bold text-xl mb-2">
          Top Films Coming Soon
        </h1>
      </div>
      <div className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {articles?.slice(0, 2).map((article, i) => (
            <FeaturedArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
      <div className="p-0 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles?.slice(-3).map((article, i) => (
            <FeaturedArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
