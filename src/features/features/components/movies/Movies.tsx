import { useFetchAllFilms } from '@/hooks/useListFilms';
import { useEffect, useState } from 'react';
import ListMovieCard from '../cards/ListMovieCard';

import { Button } from '@/components/ui/button';
import type { IFilmsResponse } from '@/types/tmdb.types';

function Movies() {
  const [page, setPage] = useState(1);
  const [allFilms, setAllFilms] = useState<IFilmsResponse[]>([]);
  const { films } = useFetchAllFilms(page);

  useEffect(() => {
    if (films.length) {
      setAllFilms((prev) => {
        const existingIds = new Set(prev.map((film) => film.id));
        const newUniqueFilms = films.filter(
          (film) => !existingIds.has(film.id)
        );
        return [...prev, ...newUniqueFilms];
      });
    }
  }, [films]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <h1 className="text-red-600 font-bold text-xl mb-2">Coming Soon</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allFilms.map((film) => (
            <ListMovieCard key={film.id} film={film} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      </div>
    </>
  );
}

export default Movies;
