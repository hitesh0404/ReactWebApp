import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm() {
    const{register,handleSubmit,watch,formState:{errors} }=    useForm();
    const onSubmit = (data)=>{
        console.log(data);
        
    }
    function isValid(password) {
      if (!password)               return "this field is required";
      if (password.length < 8)     return "min length of password should be greater then 8";
      if (password.length > 16)    return "Max length of password should be less then 16";
      if (!/[0-9]/.test(password)) return "number required";
      if (!/[A-Z]/.test(password)) return "uppercase required";
      if (!/[a-z]/.test(password)) return "lowercase required";
    }
  return (
    <>
      <div>RegisterForm</div>
      <div className="container-fluid ">
        <form
          onSubmit={handleSubmit()}
          className="col-sm-12 col-md-6 col-md-5 col-xl-5 col-xxl-4 col-12 mx-auto"
        >
          <label className="form-label" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            {...register("firstname", { required: true })}
          />
          <p className="errors">{errors.firstname && "First Name Required"}</p>
          <label className="form-label" htmlFor="lastname">
            lastname
          </label>
          <input
            className="form-control"
            placeholder={watch("firstname")}
            type="text"
            name="lastname"
            id="lastname"
            {...register("lastname", { required: true })}
          />
          <p className="errors">{errors.lastname && "Last Name Required"}</p>
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
          />
          <p className="errors">{errors.email && "email Required"}</p>
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true, validate: isValid })}
          />
          {watch("password")}

          <p className="errors">
            {" "}
            {errors.password && errors.password.message}
          </p>
          <label className="form-label" htmlFor="age">
            age
          </label>
          <input
            className="form-control"
            type="number"
            step={1}
            min={0}
            max={123}
            name="age"
            id="age"
            {...register("age", { required: true })}
          />
          <p className="errors">{errors.age && "First Name Required"}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm