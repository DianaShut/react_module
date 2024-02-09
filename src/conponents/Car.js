const Car = ({car, setCarForUpdate}) => {
    let{id, brand, price, year} = car;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button>Delete</button>
        </div>
    );
};

export {Car};