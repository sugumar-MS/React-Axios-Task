import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    name: "",
    email: "",
    phone: "",
    address:{
      street: "",
    city: "",
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "street" || name === "city") {
      setCreateData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name]: value,
        },
      }));
    }
    else{
        setCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://6666d898a2f8516ff7a5384e.mockapi.io/users",
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div className="container mt-4">
    <form className="m-2" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={createData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={createData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={createData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          className="form-control"
          id="street"
          name="street"
          value={createData.address.street}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={createData.address.city}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Create
      </button>
    </form>
  </div>
  );
};

export default Create;