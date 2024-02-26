import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from '../../../hooks'
const Episode = ({episode}) => {
    const {id, name, air_date, characters} = episode;
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    const toCharacters = () =>{
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',') //отримуємо потрібні id
        console.log(ids)
        setName(name)
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.episode} onClick={toCharacters}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Air_date: {air_date}</div>
            <div>Episode: {episode.episode}</div>
        </div>

    );
};

export {Episode};