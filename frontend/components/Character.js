import React, {useState} from 'react'

function Character({person, homeworld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeWorld, setShowHomeWorld] = useState(false);
  const toggleHomeWorld = () => {
    setShowHomeWorld(!showHomeWorld);
  };
  return (
    <div className="character-card" onClick={toggleHomeWorld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{person.name}</h3>
      {showHomeWorld && (
        <p>
          Planet: <span className='character-planet'>{homeworld}</span>
        </p>
      )}
    </div>
  );
}

export default Character
