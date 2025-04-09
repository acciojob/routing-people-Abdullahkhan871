import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const UserList = () => {
    const [userList, setUserList] = useState([]);
    
    function getUserList(){
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=> setUserList(res.data))
                .catch(err => console.log(err))
    }

    useEffect(()=>{
        getUserList()
    }, [])

  return (
    <>
        <div>
            <h1>
                UserList
            </h1>
        {
            userList ? (
                <ul>
                    {
                        userList.map(list =>(
                            <li key={list.id}>
                            <Link to={`/users/${list.id}`}>{list.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            ) : <p>Loding</p>
        }
        </div>
    </>
  )
}

export default UserList