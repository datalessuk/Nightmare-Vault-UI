import { useEffect, useState } from 'react';
import apiClient from '@/services/api';

export function useOnWatchList(initialFilmId: string) {
  const [isOnWatchList, setIsOnWatchList] = useState<boolean | null>(null);

  const fetchWatchlistStatus = async (filmId = initialFilmId) => {
    if (!filmId) return;

    try {
      const response = await apiClient.get(`/getwatchlist?filmId=${filmId}`);
      setIsOnWatchList(response.data.isOnWatchList);
    } catch (error) {
      console.error('Failed to fetch watchlist status:', error);
      setIsOnWatchList(false);
    }
  };

  useEffect(() => {
    fetchWatchlistStatus();
  }, [initialFilmId]);

  return {
    isOnWatchList,
    refreshWatchListStatus: fetchWatchlistStatus,
  };
}
