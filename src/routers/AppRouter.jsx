import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import LoginScreen from '../components/LoginScreen/LoginScreen';

import DashRoutes from './DashRoutes';

const AppRouter = () => {
    return (
        <Router>
            
            <div>
                
                

                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route path="/" component={DashRoutes}/>
                    
                </Switch>
            </div>
        </Router>
        
    )
}

export default AppRouter
