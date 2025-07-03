import apiClient from '@/services/api';
import type { IFilmResponse } from '@/types/tmdb.types';
import { useEffect, useState } from 'react';

export function useGetFilm(id: string) {
  const [film, setFilm] = useState<IFilmResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      try {
        const response = await apiClient.get(`/getfilm?id=${id}`);
        setFilm(response.data || []);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch:', err);
      }
    };

    fetchData();
  }, [id]);
  return { film, error };
}
