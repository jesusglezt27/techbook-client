import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className='bg-black text-white p-4 min-h-screen'
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
      }}
    >
      <div className='text-center text-white mb-8'>
        <h1 className='text-4xl font-bold mt-6'>Welcome to Your Bookshelf</h1>
        <p className='text-lg'></p>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-3xl text-white'></h2>
        <Link to='/books/create' className='flex items-center'>
          <span className='text-sky-600 mr-2'>CREATE</span>
          <MdOutlineAddBox className='text-sky-600 text-4xl' />
        </Link>
      </div>
      <div className='flex justify-center items-center gap-x-4 mb-4'>
        <button
          className={`${
            showType === 'table'
              ? 'bg-sky-600 hover:bg-sky-700'
              : 'bg-gray-600 hover:bg-gray-700'
          } text-white px-4 py-1 rounded-lg`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`${
            showType === 'card'
              ? 'bg-sky-600 hover:bg-sky-700'
              : 'bg-gray-600 hover.bg-gray-700'
          } text-white px-4 py-1 rounded-lg`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
