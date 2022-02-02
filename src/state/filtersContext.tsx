import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type FiltersContext = [string, Dispatch<SetStateAction<string>>];

const initialState: FiltersContext = ['', () => {}];

export const FiltersContext = createContext<FiltersContext>(initialState);

export const useFilters = () => useContext(FiltersContext);
