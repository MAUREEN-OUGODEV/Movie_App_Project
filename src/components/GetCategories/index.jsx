
import React, { useEffect, useState } from 'react';
import { GetCategories } from '../../utils/utilities';
import './style.css';

function CategoriesComponent({ selectedCategory, handleCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const categoriesData = await GetCategories();
      if (typeof categoriesData === 'string') {
        console.error(categoriesData);
      } else {
        setLoading(false);
        setCategories(categoriesData.genres || []);
      }
    })();
  }, []);

  if (loading) {
    return <h1>Loading categories...</h1>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id, category.name)}
            
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComponent;
