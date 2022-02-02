import { useState } from 'react';
import { useFilters } from '../../state/filtersContext';
import { useGamesData } from '../../state/gamesContext';
import { sortArrayOfObjects } from '../../utils';
import styles from './filters.module.css';

type SortDirection = 'asc' | 'desc';

const Filters = () => {
  const [search, setSearch] = useFilters();
  const [sortDir, setSortDir] = useState<SortDirection>('asc');
  const [games, setGames] = useGamesData();

  const sortGames = () => {
    const isAsc = sortDir === 'asc';
    const sortedArr = sortArrayOfObjects(games, 'name', isAsc);
    setGames(sortedArr);
    setSortDir(isAsc ? 'desc' : 'asc');
  };

  return (
    <div className="row mb-5">
      <div className="col-sm-8 col-md-6 col-lg-5 col-12 mb-4 mb-sm-0 me-2">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search for.."
        />
      </div>
      <div className="col d-flex align-items-center">
        <span onClick={sortGames} className={styles.sortBtn}>
          Sort: {sortDir === 'asc' ? 'A-Z ' : 'Z-A '}
          {sortDir === 'desc' ? <>&#8593;</> : <>&#8595;</>}
        </span>
      </div>
    </div>
  );
};

export default Filters;
