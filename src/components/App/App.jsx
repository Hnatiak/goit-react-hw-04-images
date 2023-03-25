// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchImages} from '../../services/images-api';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
// import Modal from 'components/Modal';
import css from './App.module.css';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';


export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setImages([]);
    setIsLoading(true);
  };

  useEffect(() => {
    if (searchName === '') return;

    fetchImages(searchName, page)
      .then(data => {
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(`Images not found!`);
        } else {
          setImages(prevImages => [...prevImages, ...data.hits]);
        }
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => setIsLoading(false), 2000);
  }, [searchName, page]);

const onLoadMore = () => {
  setIsLoading(true);
  setTimeout(() => {
    setPage(page + 1);
    setIsLoading(false);
  }, 2000);
};

return (
    <div className={css.App}>
      <SearchBar handleFormSubmit={handleFormSubmit} setInputValue={setInputValue} />
      {inputValue.trim() === '' && images.length === 0 && <div className={css.text}>Here is empty</div>}
      <ImageGallery images={images} />
      <Loader isLoading={isLoading} />
      {!isLoading && images.length > 0 && <Button loadMore={onLoadMore} />}
    </div>
  );
};


export default App;

// import 'react-toastify/dist/ReactToastify.css';
// import { fetchImages } from '../../services/images-api';
// import SearchBar from 'components/SearchBar';
// import ImageGallery from 'components/ImageGallery';
// import Button from 'components/Button';
// import Loader from 'components/Loader';
// import css from './App.module.css';
// import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';

// export const App = () => {
//   const [searchName, setSearchName] = useState('');
//   const [page, setPage] = useState(1);
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [inputValue, setInputValue] = useState('');

//   const handleFormSubmit = (searchName) => {
//     setSearchName(searchName);
//     setPage(1);
//     setImages([]);
//     setIsLoading(true);
//   };

//   useEffect(() => {
//     if (searchName === '') {
//       setImages([]);
//       return;
//     }

//     fetchImages(searchName, page)
//       .then((data) => {
//         if (data.hits.length === 0) {
//           Notiflix.Notify.failure(`Images not found!`);
//         } else {
//           setImages((prevImages) => [...prevImages, ...data.hits]);
//         }
//       })
//       .catch((err) => Notiflix.Notify.failure(err.message))
//       .finally(() => setIsLoading(false));
//   }, [searchName, page]);

//   const onLoadMore = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setPage(page + 1);
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className={css.App}>
//       <SearchBar handleFormSubmit={handleFormSubmit} setInputValue={setInputValue} />
//       {(inputValue.trim() === '' && images.length === 0) && <p className={css.text}>Here is empty</p>}
//       <ImageGallery images={images} />
//       <Loader isLoading={isLoading} />
//       {!isLoading && images.length > 0 && <Button loadMore={onLoadMore} />}
//     </div>
//   );
// };

// export default App;