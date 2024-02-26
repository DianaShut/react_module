import {useEffect, useState} from "react";
import css from './Episodes.module.css'
import {EpisodeService} from "../../../services";
import {Episode} from "../Episode/Episode";
import {usePageQuery} from "../../../hooks";



const Episodes = () => {
    const [episodesRes, setEpisodesRes] = useState({prev: null, next: null, results:[]})
    const {page, nextPage, prevPage} =usePageQuery()


    useEffect(() => {
        EpisodeService.getAll(page).then(({data}) => {
            setEpisodesRes(() =>{
                const{info:{next, prev}, results} = data;
                return {
                    next, prev, results
                }
            })
        })
    }, [page]);

    return (
        <div>
            <div className={css.Episodes}>
                {episodesRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodesRes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodesRes.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};