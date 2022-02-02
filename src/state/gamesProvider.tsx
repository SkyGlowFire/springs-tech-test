import { FC, useState, useContext } from 'react';
import { Game } from '../types/game';
import { GamesContext } from './gamesContext';

export const GamesProvider: FC = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);

  return (
    <GamesContext.Provider value={[games, setGames]}>
      {children}
    </GamesContext.Provider>
  );
};
