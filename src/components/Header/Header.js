import {Link} from "react-router-dom"

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/todos'}>TODOS</Link>
            <Link to={'/albums'}>ALBUMS</Link>
            <Link to={'/comments'}>COMMENTS</Link>
        </div>
    );

};

export {Header};