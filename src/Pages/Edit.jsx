import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    address:{
      street: "",
      city: "",
    }
    
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6666d898a2f8516ff7a5384e.mockapi.io/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "street" || name === "city") {
      setEditData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name]: value,
        },
      }));
    }
    else{
        setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
    }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6666d898a2f8516ff7a5384e.mockapi.io/users/${id}`,
        editData
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
          value={editData.name}
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
          value={editData.email}
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
          value={editData.phone}
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
          value={editData.address.street}
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
          value={editData.address.city}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Update
      </button>
    </form>
  </div>
  );
};

export default Edit;