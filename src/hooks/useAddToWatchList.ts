import apiClient from '@/services/api';

export function useAddToWatchList() {
  const addToWatchList = async (filmId: string) => {
    if (!filmId) return;

    try {
      await apiClient.patch('/addtowatchlist', { filmId });
    } catch (error) {
      console.error('Failed to add to watchlist:', error);
      throw error;
    }
  };

  return { addToWatchList };
}
