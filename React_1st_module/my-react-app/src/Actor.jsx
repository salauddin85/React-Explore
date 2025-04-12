import "./Actor.css"
export default function Actor({name, age}) {

    return (
        <div>
            {/* Actor component content goes here */}
            <h1 style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
                I am an Actor {name} with age {age}
            </h1>
            <p className="actor">This is additional content for the Actor component.</p>
        </div>
    );
}
