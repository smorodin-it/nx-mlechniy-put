import UsersService from 'libs/shared/api/src/lib/services/UsersService';
import { useEffect, useState } from 'react';

export function App() {
  useEffect(() => {
    UsersService.list()
  }, []);

  return <>test</>;
}

export default App;
