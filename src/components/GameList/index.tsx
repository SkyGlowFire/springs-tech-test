import { FC, useState } from 'react';
import { moveArrayItem } from '../../utils';
import { GameWithPosition } from '../../types/game';
import { useGamesData } from '../../state/gamesContext';
import GameCard from '../GameCard';
import { useFilters } from '../../state/filtersContext';
import styles from './game-list.module.css';

interface GameListProps {
  games: GameWithPosition[];
}

const GameList: FC<GameListProps> = ({ games }) => {
  const [dragging, setDragging] = useState<number | null>(null);
  const [draggedOver, setDraggedOver] = useState<number | null>(null);
  const [gameData, setGamesData] = useGamesData();
  const [search] = useFilters();

  const onDragStart = (idx: number) => () => {
    setDragging(idx);
  };

  const onDragOver = (idx: number) => () => {
    setDraggedOver(idx);
  };

  const onDragEnd = () => {
    if (dragging === null || draggedOver === null) return;
    const updatedList = moveArrayItem(gameData, dragging, draggedOver);
    setGamesData(updatedList);
    setDragging(null);
  };

  if (games.length === 0) {
    return (
      <div className={styles.root} style={{ fontSize: '1.2rem' }}>
        {search ? (
          <p>
            No games found with name "<strong>{search}</strong>"
          </p>
        ) : (
          <>
            <p>There are no games in your list.</p>
            <p>
              You can load games by pressing "Load games" button or add your own
              games using form above.
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className="row">
        {games.map((game) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
            <GameCard
              key={game.id}
              game={game}
              onDragEnd={onDragEnd}
              onDragOver={onDragOver(game.pos)}
              onDragStart={onDragStart(game.pos)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
