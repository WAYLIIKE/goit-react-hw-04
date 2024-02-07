import Modal from 'react-modal';
import { useState } from 'react';
import css from './ImageCard.module.css';
import { TfiClose } from 'react-icons/tfi';

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
          onClick={toggleModal}
        />
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            ariaHideApp={false}
            className={css.modal}
          >
            <TfiClose className={css.button} onClick={toggleModal} size={25} />
            <img
              src={regular}
              alt={alt_description}
              width="100%"
              height="100%"
            />
          </Modal>
        )}
      </li>
    </div>
  );
};
