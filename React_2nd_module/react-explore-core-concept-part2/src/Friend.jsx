export default function Friend({ friend }) {
    const { name, email, phone } = friend; // Destructured friend prop
    return (
        <div style={{ border: '2px solid red', margin: '10px' }}>
            <h1>Friend</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}