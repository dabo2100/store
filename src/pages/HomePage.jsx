import axios from 'axios';
import { domain, selectedCategory } from '../store';
import { useEffect, useState } from 'react';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { value, setCategory } = selectedCategory();
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([]);
  const [view, setView] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let final = categories.filter((el) => el.name?.toLowerCase()?.includes(searchValue?.toLowerCase()));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setView(final);
  }, [searchValue, categories]);

  useEffect(() => {
    let url1 = domain + '/api/categories';
    axios.get(url1, { params: { populate: '*' } }).then((res) => {
      setCategories(res.data.data);
      setView(res.data.data);
    });

    let url2 = domain + '/api/phones';
    axios.get(url2, { params: { populate: '*' } }).then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (value) {
      let url = domain + '/api/categories/' + value;
      axios
        .get(url, {
          params: {
            populate: {
              phones: {
                populate: '*',
              },
            },
          },
        })
        .then((res) => {
          setProducts(res.data.data.phones);
        });
    } else {
      let url2 = domain + '/api/phones';
      axios.get(url2, { params: { populate: '*' } }).then((res) => {
        setProducts(res.data.data);
      });
    }
  }, [value]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Prev/Next
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row py-5 gap-6">
      <div className="w-full md:w-[256px] h-fit md:h-full shrink-0">
        <details className="collapse bg-white border border-base-300" name="my-accordion-det-1" open>
          <summary className="collapse-title font-semibold">Categories</summary>
          <div className="collapse-content text-sm flex flex-col gap-4">
            <input onKeyUp={(event) => setSearchValue(event.target.value)} className="w-full input bg-[#F5F5F5]" placeholder="Search For Filters" />
            {view?.map((el) => (
              <Category key={el.documentId} category={el} />
            ))}
            <div className="w-full">
              <label className="flex w-full items-center gap-3 ">
                <input onChange={() => setCategory()} type="radio" name="filter" />
                All Categories
              </label>
            </div>
          </div>
        </details>
      </div>

      <div className="w-full h-full p-4">
        <h1>Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems?.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-100'}`}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => paginate(idx + 1)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === idx + 1
                  ? 'bg-black text-white'
                  : 'bg-[#F5F5F5] text-[#989898] hover:bg-gray-200'
                }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
            className={`p-2 rounded-lg ${currentPage === Math.ceil(products.length / itemsPerPage) ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-100'}`}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
