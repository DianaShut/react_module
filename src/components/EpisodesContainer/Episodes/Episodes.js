import {useEffect, useState} from "react";
import css from './Episodes.module.css'
import {EpisodeService} from "../../../services";
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const [episodesRes, setEpisodesRes] = useState({prev: null, next: null, results:[]})

    useEffect(() => {
        EpisodeService.getAll().then(({data}) => setEpisodesRes(data))
    }, []);

    const prev = () =>{

    }

    const next =() =>{

    }

    return (
        <div>
            <div className={css.Episodes}>
                {episodesRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};