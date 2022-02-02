import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type AlertContext = [string, Dispatch<SetStateAction<string>>];

const initialState: AlertContext = ['', () => {}];

export const AlertContext = createContext<AlertContext>(initialState);

export const useAlert = () => useContext(AlertContext);
