import apiClient from '@/services/api';

export function useRemoveWatchList() {
  const removeWatchList = async (id: string) => {
    if (!id) return;

    try {
      await apiClient.delete(`/removefromwatchlist?filmId=${id}`);
    } catch (error) {
      console.error('Failed to add to watchlist:', error);
      throw error;
    }
  };

  return { removeWatchList };
}
