import React from "react";
import { setUser } from "../actions";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignInFormData {
  usn: string;
  psw: string;
  pswRpt: string;
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignInFormData>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const password = watch("psw");

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
    dispatch(setUser({ usn: data.usn }));
    navigate("/home");
    reset();
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            {...register("usn", { required: true })}
          />
          {errors.usn && <p>Username is required</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("psw", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          {errors.psw && <p>{errors.psw.message}</p>}
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            {...register("pswRpt", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.pswRpt && <p>{errors.pswRpt.message}</p>}
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
