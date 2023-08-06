import React, { useEffect, useState } from 'react';
import { GetCategories } from '../../utils/utilities'; // Update the path to your api.js file
import './style.css'

function CategoriesComponent() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const categoriesData = await GetCategories();
      if (typeof categoriesData === 'string') {
        console.error(categoriesData); // Log error message
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
          <button key={category.id} to={`/category/${category.id}`} className="category-button">
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComponent;
