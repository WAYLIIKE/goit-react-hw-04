import { Modal } from 'react-modal';
import { useState } from 'react';
import css from './ImageCard.module.css';

export const ImageCard = ({
  data: {
    id,
    urls: { small, regular },
    likes,
    alt_description,
  },
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(prevValue => !prevValue);
  }

  return (
    <div>
      <li key={id}>
        <img
          className={css.image}
          src={small}
          alt={alt_description}
          width="400"
          height="400"
          // onClick={toggleModal}
        />
      </li>
      {/* {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
          <button onClick={toggleModal}>close</button>
        </Modal>
      )} */}
    </div>
  );
};
