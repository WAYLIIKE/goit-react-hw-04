import { ImageCard } from '../imageCard/imageCard';
import css from './imageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.container}>
      {items.map(item => (
        <ImageCard data={item} key={item.id} />
      ))}
    </ul>
  );
};
