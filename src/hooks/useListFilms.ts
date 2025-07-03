import apiClient from '@/services/api';
import type { IFilmsResponse } from '@/types/tmdb.types';
import { useEffect, useState } from 'react';

export function useFetchAllFilms(page: number) {
  const [films, setFilms] = useState<IFilmsResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/topupcoming', {
          params: { page },
        });
        setFilms(response.data.results || []);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch:', err);
      }
    };

    fetchData();
  }, [page]);

  return { films, error };
}
