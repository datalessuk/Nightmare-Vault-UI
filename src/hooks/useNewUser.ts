import { useCallback } from 'react';
import apiClient from '@/services/api';

export function useNewUser() {
  const createUserProfile = useCallback(async (firstName: string) => {
    if (!firstName) return;

    try {
      await apiClient.post('/users', { firstName });
    } catch (err) {
      console.error('Failed to create user:', err);
      throw err; // Re-throw so the caller can handle it
    }
  }, []);

  return { createUserProfile };
}
