import { useState, useEffect } from 'react'
import axios from 'axios'

export function Test() {

    const add = x => y => z => {
        console.log(x, y, z);
        return x + y + z
    }
    add(4)(5)(6)
    console.log('i love pizza'[0])


    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        }
        // Add code here to fetch some users with axios and the URL variable
        // then update the 'users' piece of state
        getUsers()

    }, []);
    return (
        <div>
            {console.log(users)}
        </div>
    )
}