import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useSignOut = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/home');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return handleSignOut;
};
export default useSignOut;
