import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
function ProductFilter({ filters, setFilters,  }) {
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
        <br />
        {filters.categories &&
          filters.categories.map((category,index) => {
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
        {filters.selectedCategories &&
          filters.selectedCategories.map((category,index) => {
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
      </form>
    </div>
  );
}

export default ProductFilter;
