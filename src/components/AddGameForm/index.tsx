import { FC, useState } from 'react';
import { ImageFile } from '../../types/file';
import ImageUpload from '../ImageUpload';
import ImageBox from '../ImageBox';
import { useGamesData } from '../../state/gamesContext';
import { uuid } from '../../utils';
import { useFilters } from '../../state/filtersContext';

const AddGameForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const setGames = useGamesData()[1];
  const setSearch = useFilters()[1];

  const onSubmit = () => {
    let errors = [];
    if (name.trim().length < 4) {
      errors.push('Name must be more than 4 characters length');
    }
    if (!image) {
      errors.push('Image is required');
    }
    if (errors.length) {
      setErrors(errors);
      return;
    }
    const newGame = { name: name.trim(), icon_url: image, id: uuid() };
    setGames((prev) => [newGame, ...prev]);
    setSearch('');
    setName('');
    setImage('');
    setErrors([]);
  };

  const onFileChange = (file: ImageFile) => {
    setImage(file.url);
  };
  const onDeleteImage = () => {
    setImage('');
  };
  return (
    <div className="p-3">
      <h5>Add New Game</h5>
      <div className="row align-items-center mt-4">
        <div className="col-auto mb-4">
          {image ? (
            <ImageBox url={image} deleteHandler={onDeleteImage} />
          ) : (
            <ImageUpload onFileChange={onFileChange} />
          )}
        </div>
        <div className="col-12 col-sm-auto mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Game title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button className="btn btn-primary" onClick={onSubmit}>
            <span>Add new game</span>
          </button>
        </div>
      </div>
      <div className="mt-2">
        {errors.map((error) => (
          <div className="form-text" style={{ color: 'red' }}>
            *{error}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGameForm;
