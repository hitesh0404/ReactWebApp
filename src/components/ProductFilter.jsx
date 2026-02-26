import React from "react";
import { useForm } from "react-hook-form";
function ProductFilter({ categories }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div style={{ border: "2px solid green" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="categories">Categories</label>
        <br/>
        {categories &&
          categories.map((category) => {
            return (
            <>
            <input
              type="checkbox"
              name="category"
              id={category}
              value={category}
              /><label htmlFor={category}>{category}</label><br/>
              </>)
          })}
      </form>
    </div>
  );
}

export default ProductFilter;
