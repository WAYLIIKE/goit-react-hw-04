import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onPagination }) => {
  return (
    <div>
      <button onClick={onPagination}>Load more images</button>
    </div>
  );
};
