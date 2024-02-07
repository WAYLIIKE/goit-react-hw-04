import { Modal } from 'react-modal';
import { useState } from 'react';
import css from './imageCard.module.css';

export const ImageCard = ({
  data: {
    id,
    urls: { small, regular },
    likes,
    alt_description,
  },
}) => {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  // console.log('open', alt_description);
  // setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <li key={id}>
      <img
        src={small}
        alt={alt_description}
        width="400"
        height="400"
        // onClick={openModal}
      />
      {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
      </Modal> */}
    </li>
  );
};
