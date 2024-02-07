import { useState, useEffect } from 'react';
import { getImage } from '../../imageApi';
import css from './App.module.css';
import { SearchBar } from '../SerachBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

function App() {
  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: false,
  });
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const onSearch = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages({
      items: [],
      loading: true,
      error: false,
    });
  };

  const handlePagination = () => {
    setImages(prevElements => ({
      ...prevElements,
      loading: true,
    }));
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setImages(prevData => ({ ...prevData, loading: false, error: false }));
        const response = await getImage(query, page);
        setImages(prevElements => ({
          ...prevElements,
          items: [...prevElements.items, ...response.results],
        }));
        // setTotalPages(response.total_pages);
        // console.log(`Totalpage`, totalPages);
      } catch (error) {
        setImages(prevElements => ({
          ...prevElements,
          error: true,
        }));
      } finally {
        setImages(prevElements => ({
          ...prevElements,
          loading: false,
        }));
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {images.error && <ErrorMessage />}
      {images.items.length > 0 && <ImageGallery items={images.items} />}
      {images.loading && <Loader />}
      {images.items.length > 0 && !images.loading && (
        <LoadMoreBtn onPagination={handlePagination} />
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
