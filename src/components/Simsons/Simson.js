const Simson = ({simson}) => {
    const {name, surname, age, info, photo} =simson;
    return (
        <div>
            <h1>{name} {surname}</h1>
            <p>Age - {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simson};