import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { DcPage } from '../components/dc/DcPage';
import { HeroesPage } from '../components/heroes/HeroesPage';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { SearchPage } from '../components/search/SearchPage';
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
             <Navbar /> 
             <div className='container mt-2'>
                 <Switch>
                    <Route exact path="/marvel" component={MarvelPage} />
                    <Route exact path="/hero/:id" component={HeroesPage} />
                    <Route exact path="/dc" component={DcPage} />
                    <Route exact path="/search" component={SearchPage} />

                    <Redirect to="/marvel" />
                 </Switch>
             </div>
        </>
    )
}
