import { Button } from '@/components/ui/button';
import useSignOut from '@/hooks/useSignOut';
import React from 'react';

function WatchList() {
  const signOut = useSignOut();

  return (
    <>
      <div>Watch list</div>
      <Button onClick={signOut}>Logout</Button>
    </>
  );
}

export default WatchList;
