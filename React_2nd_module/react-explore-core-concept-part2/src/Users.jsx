import  {useEffect, useState } from 'react';
export default function Users() {
    const [users, setUsers] = useState([]);
    console.log('Users component rendered', users,setUsers);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);
    return (
        <div>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
            
        </div>
    )
}