import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryFood } from '../../store/slice/categoryFood';

const Catalog = () => {
  const { categories } = useSelector(store => store.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryFood());
  }, [dispatch]);

  if (!categories.length) {
    return <h1>Loading...</h1>;
  }

  console.log(categories);
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
