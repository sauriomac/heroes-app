import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroesScreen from '../components/heroes/HeroesScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import Navbar from '../components/ui/Navbar'

const DashRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
           
        <Switch>
            <Route exact path="/marvel" component={ MarvelScreen } />
            <Route exact path="/hero/:heroeId" component={ HeroesScreen } />
            <Route exact path="/dc" component={ DcScreen } />
            <Route exact path="/search" component={ SearchScreen } />

            <Redirect to="/marvel"/>
        </Switch>
        </div>
        </>
    )
}

export default DashRoutes
