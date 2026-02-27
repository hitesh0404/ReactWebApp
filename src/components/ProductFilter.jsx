import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AppContext } from "./AppContext";
function ProductFilter({ filters, setFilters,  }) {
  const user = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  function handleCategoryChange(e) {
    if (filters.selectedCategories.includes(e.target.value)) {
      //present discard
      let selected = filters.selectedCategories;
      setFilters({
        ...filters,
        selectedCategories: selected.filter((cat) => cat != e.target.value),
      });
    } else {
      //not present , add
      setFilters({
        ...filters,
        selectedCategories: [...filters.selectedCategories, e.target.value],
      });
    }
  }
  return (
    <div style={{ border: "2px solid green" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="categories">Categories</label>
        <p>{user}</p>
        <br />
        {filters.categories &&
          filters.categories.map((category, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name="category"
                  id={category}
                  value={category}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={category}>{category}</label>
                <br />
              </div>
            );
          })}
        <hr></hr>
        <label htmlFor="min-rating">Min Rating</label>
        <input
          type="range"
          name="min-rating"
          id="min-rating"
          min={1}
          max={5}
          onChange={(e) => {
            setFilters({ ...filters, minRating: e.target.value });
          }}
        />
        {filters.minRating}
        <hr />
        <label htmlFor="max-rating">Max Rating</label>
        <input
          type="range"
          name="max-rating"
          id="max-rating"
          min={1}
          max={5}
          onChange={(e) => {
            setFilters({ ...filters, maxRating: e.target.value });
          }}
        />
        {filters.maxRating}
      </form>
    </div>
  );
}

export default ProductFilter;
