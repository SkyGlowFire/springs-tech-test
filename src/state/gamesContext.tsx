import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Game } from '../types/game';

type GamesContext = [Game[], Dispatch<SetStateAction<Game[]>>];

const initialState: GamesContext = [[], () => {}];

export const GamesContext = createContext<GamesContext>(initialState);

export const useGamesData = () => useContext(GamesContext);
