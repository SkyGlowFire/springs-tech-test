import { ChangeEvent, FC } from 'react';
import { ImageFile } from '../../types/file';
import styles from './image-upload.module.css';

interface ImageUploadProps {
  onFileChange: (file: ImageFile) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ onFileChange }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileWithPreview: ImageFile = {
      ...file,
      url: URL.createObjectURL(file),
    };
    onFileChange(fileWithPreview);
  };
  return (
    <>
      <label htmlFor="uploadFile" className={styles.label}>
        <input
          type="file"
          id="uploadFile"
          className={styles.input}
          onChange={onChange}
          accept="image/*"
        />
      </label>
    </>
  );
};

export default ImageUpload;
