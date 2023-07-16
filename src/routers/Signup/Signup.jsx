import React, { useContext, useState } from "react";
import { SignUpWithEmail } from "../../utils/firebase/firebase.utils";
import SignIn from "../../componets/SignIn/SignIn";
import { ProductsContext } from "../../context/products";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setLogIn } = useContext(ProductsContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleValues = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handSumbit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    try {
      const user = await SignUpWithEmail(email, password, displayName);
      setLogIn(user.displayName);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already used");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full h-[92vh] flex items-center justify-center flex-wrap">
      <div className="bg-white w-[70%] h-full flex items-center justify-center  ">
        <form
          className=" ml-10 w-[30%] h-[50%] flex items-center flex-col font-mont"
          onSubmit={handSumbit}
        >
          <label>User Name</label>
          <input
            type="text"
            name="displayName"
            onChange={handleValues}
            className="border-2 flex w-[90%] h-[10%] rounded-xl  "
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleValues}
            className="border-2 flex  w-[90%] h-[10%] rounded-xl"
          ></input>
          <label>Pasword</label>
          <input
            type="password"
            name="password"
            onChange={handleValues}
            className="border-2 flex  w-[90%] h-[10%] rounded-xl"
          ></input>
          <label>Corfim Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleValues}
            className="border-2 flex  w-[90%] h-[10%] mb-5 rounded-xl"
          ></input>
          <button className="border-2 w-[50%] h-[12%] rounded-xl hover:bg-black ease-in duration-300 hover:text-white ">
            Sign Up
          </button>
        </form>
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default Signup;
