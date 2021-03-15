import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelPage = () => {
    return (
        <div>
            <h1 >Marvel heroes</h1>
            <hr />
            <HeroesList publisher={ 'Marvel Comics' }/>
        </div>
    )
}
