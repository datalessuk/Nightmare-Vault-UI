import axios from 'axios';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const noAuthNeeded = ['/upcoming', '/movies', '/topupcoming', '/getfilm?id='];

const apiClient = axios.create({
  baseURL: 'https://th0gdlelg2.execute-api.eu-west-2.amazonaws.com/prod/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let currentUser: User | null = null;
let authInitialized = false;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  authInitialized = true;
});

// Function to wait for auth to be initialized
const waitForAuth = (): Promise<User | null> => {
  return new Promise((resolve) => {
    if (authInitialized) {
      resolve(currentUser);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

apiClient.interceptors.request.use(
  async (config) => {
    console.log('Request URL:', config.url);
    if (noAuthNeeded.some((path) => config.url?.includes(path))) {
      return config;
    }

    // Wait for auth to initialize
    const user = await waitForAuth();

    if (!user) {
      throw new Error('Authentication required');
    }

    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
