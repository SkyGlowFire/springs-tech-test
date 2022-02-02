import { FC, useState } from 'react';
import { AlertContext } from './alertContext';

export const AlertProvider: FC = ({ children }) => {
  const [alert, setAlert] = useState<string>('');

  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertContext.Provider>
  );
};
