import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../lib/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNewUser } from '@/hooks/useNewUser';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUserProfile } = useNewUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        await createUserProfile(firstName);
        navigate('/watchlist');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center ">
            <div className="w-full max-w-sm space-y-6">
              <h2 className="text-2xl font-bold text-center creepster-text">
                Nightmare Vault
              </h2>
              <div>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className="w-full"
                />
              </div>
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
                Sign Up
              </Button>
              <div className="pt-2">
                <p>
                  Have a account? <Link to="/login">login here</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
