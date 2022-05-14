import { UsersService } from '@nx-mlechniy-put/shared/api';
import { useEffect, useState } from 'react';

export function App() {
  useEffect(() => {
    UsersService.list()
  }, []);

  return <>test</>;
}

export default App;
