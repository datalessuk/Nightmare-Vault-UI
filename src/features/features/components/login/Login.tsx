import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center ">
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-2xl font-bold text-center creepster-text">
              Nightmare Vault
            </h2>
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full"
              />
            </div>
            <div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full"
              />
            </div>
            <Button className="w-full" variant="outline">
              Sign In
            </Button>
            <div className="pt-2">
              <p>
                Don't have an account? <Link to="/signup">sign-up here</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
