import { useForm } from "react-hook-form";

function LoginForm() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
  return (<>
    <div>LoginForm</div>
    <form >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username"), {required}} />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password"),
        {
            required,
            minLength:{
                value:8,
                message:"length should be min 8 character long"
            }
        }} />
        {errors.name && errors.message}
    </form>
  </>
  )
}

export default LoginForm