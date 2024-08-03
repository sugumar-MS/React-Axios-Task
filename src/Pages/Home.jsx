import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setId }) => {
  const [users, setUsers] = useState([]);
  const[deleteData,setDeleteData]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6666d898a2f8516ff7a5384e.mockapi.io/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
const handleEdit=(id)=>{
      setId(id)
      navigate(`/edit/${id}`)
}
const handleDelete=async(id)=>{
await axios.delete(`https://6666d898a2f8516ff7a5384e.mockapi.io/users/${id}`)
.then(res=>setDeleteData(res.data))
.catch((error)=>console.log(error));
}

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 mx-2 my-2 g-4">
        {users.map((element, index) => {
          return (
            <div key={element.id}>
              <div className="card col">
                <div className="card-body">
                  <h5 className="card-title">Name : {element.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {element.email}
                  </h6>
                  <p className="card-text">Address :</p>
                  <p className="mx-md-4 card-text">
                    Ph : {element.phone} <br/>
                    {element.address.street},<br />
                    {element.address.city}
                  </p>
                  <button
                    onClick={() => {
                      handleEdit(element.id);
                    }}
                    className="btn btn-success mx-sm-2 mx-md-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(element.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={()=>navigate('/Create')} className="mx-4 btn btn-primary">Add User</button>
    </div>
  );
};

export default Home;