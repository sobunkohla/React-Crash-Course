import { useParams } from "react-router-dom"
import React, { useEffect, useState} from "react"
import axios from "axios"
import User from "../components/User"
import { Link } from "react-router-dom"
function Users() {
const  [users, setUsers] = useState({})

console.log(useParams())
    const  {id }= useParams()
    async function user() {
     const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     setUsers(data)
     console.log(data)
   
    }
useEffect(() =>{
    user() 
},[])
   

    return (
<>
<Link to="/"> Go back</Link>
  <User id={users.id}
  name={users.name}
  email={users.email}
  username={users.username}/>
</>
    )
}

export default Users