import { FC, useState } from 'react';
import { FiltersContext } from './filtersContext';

export const FiltersProvider: FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <FiltersContext.Provider value={[search, setSearch]}>
      {children}
    </FiltersContext.Provider>
  );
};
