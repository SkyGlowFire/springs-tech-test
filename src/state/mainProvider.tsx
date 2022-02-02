import { AlertProvider } from './alertProvider';
import { FiltersProvider } from './filtersProvider';
import { GamesProvider } from './gamesProvider';
import { combineProviders } from './combineProviders';

const providers = [AlertProvider, FiltersProvider, GamesProvider];

export const MainProvider = combineProviders(...providers);
