import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

import Loading from "../../components/Loading";

const initialState = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signup, setSignup] = useState(false);
  const [values, setValues] = useState(initialState);

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signup) {
        return;
      } else {
        const user = await login({
          email: values.email,
          password: values.password,
        }).unwrap();

        dispatch(setCredentials({ token: user.token, email: values.email }));

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const toggleSignup = () => {
    setSignup(!signup);
  };

  if (isLoading) return <Loading />;
  return (
    <section className="bg-slate-200 min-h-screen flex">
      <div className=" max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center font-mono">
            {signup ? "Sign up" : "Login"}
          </h1>
          {signup && (
            <input
              value={values.name}
              onChange={handleChange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
            />
          )}

          <input
            onChange={handleChange}
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={values.email}
          />

          <input
            onChange={handleChange}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            value={values.password}
            placeholder="Password"
          />
          {signup && (
            <input
              onChange={handleChange}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="cpassword"
              value={values.cpassword}
              placeholder="Confirm Password"
            />
          )}

          <input
            type="submit"
            className="w-full text-center py-3 rounded bg-orange-500 cursor-pointer font-semibold  text-black hover:bg-green-dark focus:outline-none my-1"
            value={signup ? "Create Account" : "Login"}
          />
        </form>

        <div className="text-grey-dark mt-6">
          {signup ? "Already have an account?" : "Don't have an account ?"}
          <span
            onClick={toggleSignup}
            className="no-underline border-b border-blue text-blue cursor-pointer font-bold ml-2"
            href="#"
          >
            {signup ? "Login" : "Signup"}
          </span>
          .
        </div>
      </div>
    </section>
  );
};

export default Auth;
