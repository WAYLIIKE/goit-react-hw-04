import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.query.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
    </div>
  );
};
