import React from "react";
import { useLocation } from 'wouter'
import css from './styles.css'
import Button from 'components/Button'
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];


export default function SearchForm({
    initialKeyword = '',
    initialRating = RATINGS[0]
}) {

    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ 
        initialKeyword,
        initialRating
    })

    const [_, pushLocation] = useLocation()


    const handleSubmit = (evt) => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <Button>Buscar</Button>
            <input
                className={css["c-search-input"]}
                placeholder='Search a gif here...'
                onChange={handleChange}
                type='text'
                value={keyword}
            />
            <select className={css["c-search-list"]} onChange={handleChangeRating} value={rating}>
                {RATINGS.map(rating =>
                    <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}

