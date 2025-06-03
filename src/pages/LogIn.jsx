import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginHandle = async () => {
    try {
      res = await axios.get("https://fakestoreapi.com/users");
      const users = res.data;
      (u) = (u.email === email && u.password === password);
      localStorage.setItem("name", users.name);

      Swal.fire({
        icon: "success",
        text: "Registeration successfuly ",
      }).then(navigate("/"));

    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registeration failure ",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen items-center justify-center  flex flex-col">
      <img
        className="w-30"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />
      <div className="min-w-75 shadow border rounded border-gray-500 flex flex-col justify-center  p-5 mt-5 ">
        <h3 className="text-lg mb-2">Sign in or create account</h3>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Enter Your Email "
            className="min-w-60 p-1 border rounded border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <input
            placeholder="Enter Your Password "
            className="min-w-60 p-1 border rounded border-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            onClick={LoginHandle}
            className="bg-yellow-300 rounded-2xl hover:bg-yellow-400 p-1 cursor-pointer"
          >
            Continue
          </button>
          <div className="flex gap-1">
            <p>You Not Have An Account?</p>
            <Link className=" hover:underline  text-blue-800" to="/register">
              create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
