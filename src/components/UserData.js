import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const UserData = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams()

    console.log(id)

   function getUser(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getUser()
    }, [])

  return (

    <>
        {
            user ? (
                <div id={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            )
            : (
                <div>Loading...</div>
            )
        }
    </>

  )
}

export default UserData