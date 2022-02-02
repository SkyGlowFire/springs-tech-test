import { FC } from 'react';
import { useGamesData } from '../../state/gamesContext';
import { Game } from '../../types/game';
import styles from './game-card.module.css';

interface GameCardProps {
  game: Game;
  onDragStart: () => void;
  onDragOver: () => void;
  onDragEnd: () => void;
}

const GameCard: FC<GameCardProps> = (props) => {
  const { game, onDragStart, onDragOver, onDragEnd } = props;
  const [_, setGames] = useGamesData();

  const onDelete = () => {
    setGames((prev) => prev.filter((item) => item.id !== game.id));
  };
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      className={styles.root}
    >
      <div className={styles.card}>
        <div className={styles.avatar}>
          <img src={game.icon_url} alt="game-avatar" className={styles.image} />
          <span className={styles.deleteBtn} onClick={onDelete}>
            &#10060;
          </span>
        </div>

        <span className={styles.text}>{game.name}</span>
      </div>
    </div>
  );
};

export default GameCard;
