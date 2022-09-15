import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [listOfCustomers, setListOfCustomers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")
  useEffect(() => {
    Axios.get("http://localhost:3001/getCustomers").then((response) => {
      setListOfCustomers(response.data)
    })
  }, []);

  const createCustomer = () => {
    Axios.post("http://localhost:3001/createCustomer", {
      name,
      age,
      username
    }).then((response) => {
      alert("New Customer Created")
      setListOfCustomers([...listOfCustomers, {
        name,
        age,
        username
      }])
    });
  };

  return (
    <div className="App">
      <div className="customerDisplay">
        {listOfCustomers.map((customer) => {
          return (
            <div>
              <h1>Name: {customer.name}</h1>
              <h1>Name: {customer.age}</h1>
              <h1>Name: {customer.username}</h1>
            </div>
          );
        })}
        <div>
              <input type="text" placeholder="Name..."
              onChange={(event)=>{
                setName(event.target.value);
              }}/>
              <input type="number" placeholder="Age..." 
              onChange={(event)=>{
                setAge(event.target.value);
              }}/>
              <input type="text" placeholder="Username..." 
              onChange={(event)=>{
                setUsername(event.target.value);
              }}/>
              <button onClick={createCustomer}>Create Customer</button> 
            </div>
      </div>
    </div>
  );
}

export default App;
