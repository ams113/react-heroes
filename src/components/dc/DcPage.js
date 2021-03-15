import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcPage = () => {
    return (
        <div>
            <h1>DC heores</h1>
            <hr />
            <HeroesList publisher={ 'DC Comics' }/>
        </div>
    )
}
