import React, { useContext, useState } from "react";
import { SignİnWithEmail } from "../../utils/firebase/firebase.utils";
import { ProductsContext } from "../../context/products";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setLogIn } = useContext(ProductsContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await SignİnWithEmail(email, password);
      console.log(user);
      setLogIn(user.displayName);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorret password");
          break;
        case "auth/user-not-found":
          alert("No user assıciated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleValues = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="  lg:w-[50%] lg:h-full flex items-center justify-center  ">
      <form
        className="  w-[60%] h-[50%] flex items-center justify-center flex-col font-mont"
        onSubmit={handleSubmit}
      >
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
          className="border-2 flex  w-[90%] h-[10%] rounded-xl mb-5"
        ></input>

        <button className="border-2 w-[50%] h-[12%] rounded-xl hover:bg-black ease-in duration-300 hover:text-white ">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
