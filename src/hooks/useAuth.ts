import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, () => {
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  return authReady;
}
