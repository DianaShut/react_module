import css from './Episode.module.css'
import {NavLink} from "react-router-dom";
const Episode = ({episode}) => {
    const {id, name, air_date} = episode;
    return (
        <div className={css.episode}>
            <NavLink to={'characters'}>
                <div>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div>Air_date: {air_date}</div>
                    <div>Episode: {episode.episode}</div>
                </div>
            </NavLink>
        </div>

    );
};

export {Episode};