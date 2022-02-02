import { useEffect, useState } from 'react';
import { GameWithPosition } from '../../types/game';
import useGetGamesQuery from '../../hooks/useGetGamesQuery';
import { useGamesData } from '../../state/gamesContext';
import { useFilters } from '../../state/filtersContext';
import GameList from '../GameList';
import Filters from '../Filters';
import { useAlert } from '../../state/alertContext';

const MainContent = () => {
  const [getGameData, { data, error, loading }] = useGetGamesQuery();
  const [gamesData, setGamesData] = useGamesData();
  const [filteredData, setFilteredData] = useState<GameWithPosition[]>([]);
  const [search, setSearch] = useFilters();
  const [_, setAlert] = useAlert();

  const loadData = async () => {
    await getGameData();
    setSearch('');
  };

  useEffect(() => {
    if (data) setGamesData(data);
  }, [data]);

  useEffect(() => {
    if (error) setAlert(error);
  }, [error]);

  useEffect(() => {
    let games = gamesData.map((game, idx) => ({ ...game, pos: idx }));
    if (search) {
      games = games.filter((game) => new RegExp(search, 'gi').test(game.name));
    }
    setFilteredData(games);
  }, [gamesData, search]);

  return (
    <div>
      <div className="row mb-4">
        <div className="col-auto me-4 mb-3 mb-sm-0">
          <h4>My Games</h4>
        </div>
        <div className="col-12 col-sm-auto">
          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={loadData}
          >
            {loading ? 'Loading...' : 'Load games'}
          </button>
        </div>
      </div>
      <Filters />
      <GameList games={filteredData} />
    </div>
  );
};

export default MainContent;
