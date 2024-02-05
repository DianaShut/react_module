const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div>
            <h1>{id} - {name}</h1>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};