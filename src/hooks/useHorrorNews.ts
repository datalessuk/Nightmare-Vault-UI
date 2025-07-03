import { useEffect, useState } from 'react';
import apiClient from '../services/api';
import type { IFilmsResponse } from '@/types/tmdb.types';

export function useFetchNewsTopics() {
  const [articles, setArticles] = useState<IFilmsResponse[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get('/upcoming');
        setArticles(res.data || []);
      } catch (err) {
        console.error('Failed to fetch:', err);
      }
    };

    fetchData();
  }, []);

  return articles; // return articles array
}
