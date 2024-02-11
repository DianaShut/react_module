import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    let{id, brand, price, year} = car;

    const deleteCar = async () => {
      await carService.deleteById(id)
        setTrigger(prev => !prev)
    };
    return (
        <div>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};