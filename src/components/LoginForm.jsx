import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
      <div>LoginForm</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
        />
        <p className="errors">{errors.username && errors.username?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "this field is required",
            },
            validate: isValid,
          })}
        />
       <p className="errors"> {errors.password && errors.password.message}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default LoginForm;
