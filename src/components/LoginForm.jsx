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
          })}
        />
       <p className="errors"> {errors.password && errors.password.message}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default LoginForm;
