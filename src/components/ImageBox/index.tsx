import { FC } from 'react';
import styles from './image-box.module.css';

export interface ImageBoxprops {
  url: string;
  deleteHandler: () => void;
}

const ImageBox: FC<ImageBoxprops> = ({ url, deleteHandler }) => {
  return (
    <>
      <div className={styles.root} style={{ backgroundImage: `url(${url})` }}>
        <div className={styles.overlay}></div>
        <span className={styles.closeBtn} onClick={deleteHandler}>
          &#10060;
        </span>
      </div>
    </>
  );
};

export default ImageBox;
