import {useEffect, useState } from "react"
import Friend from "./Friend";
export default function Friends() {
    const [friends, setFriends] = useState([]); // Uncommented this line
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setFriends(data))
            .catch((error) => console.error('Error fetching friends:', error));
    }, []);
    return (
        <div>
            <h1>Friends : </h1>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id} >
                        <Friend friend={friend} /> {/* Pass the friend object as a prop */}
                    </li>
                ))}
            </ul>
            <p>Total Friends: {friends.length}</p> {/* Display total number of friends */}
        </div>
    )
}