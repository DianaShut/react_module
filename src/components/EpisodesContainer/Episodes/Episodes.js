import {useEffect, useState} from "react";
import css from './Episodes.module.css'
import {EpisodeService} from "../../../services";
import {Episode} from "../Episode/Episode";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../../hooks";

const Episodes = () => {
    const [episodesRes, setEpisodesRes] = useState({prev: null, next: null, results:[]})
    const [query, setQuery] =useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const {trigger} = useAppContext()

    useEffect(() => {
        EpisodeService.getAll().then(({data}) => {
            setEpisodesRes(data)
            setPrevNext({prev:data, next: data})
        })
    }, [query, trigger]);

    const prev = () =>{
        setQuery(prev=>{
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next =() =>{
        setQuery(next =>{
            next.set('page', (+next.get('page')-1).toString())
            return next
        })
    }

    return (
        <div>
            <div className={css.Episodes}>
                {episodesRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};