import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginPage } from '../components/login/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { user } = useContext( AuthContext );

    return (
        <Router>
            <div>      
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login"
                        component={LoginPage}
                        isAuthenticated={ user.logged }
                    />   

                    <PrivateRoute 
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={ user.logged }
                    />   
                </Switch>
            </div>
        </Router>
    )
}
