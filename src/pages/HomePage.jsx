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
    setView(final);
  }, [searchValue]);

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

  return (
    <div className="w-full flex py-5">
      <div className="w-[256px] h-full">
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
        <div className="grid grid-cols-3 gap-4">
          {products?.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
