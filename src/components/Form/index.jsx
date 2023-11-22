import React from "react";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
  });

  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, age } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">user name</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <label htmlFor="">age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
        />

        <button type="submit ">sing up</button>
      </form>
    </div>
  );
};

export default Form;
