import { useState } from 'react';
import { getGamesAPI } from '../services/games';
import { Game } from '../types/game';
import { uuid } from '../utils';

const useGetGamesQuery = () => {
  const [data, setData] = useState<Game[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setError('');
    setLoading(true);
    const { data, err } = await getGamesAPI();
    if (data) {
      const games = data.map((item) => ({
        ...item,
        id: uuid(),
      }));
      setData(games);
    }
    if (err) {
      setError('Unable to load games list.');
      setData(null);
    }
    setLoading(false);
  };

  return [fetchData, { data, loading, error }] as const;
};

export default useGetGamesQuery;
