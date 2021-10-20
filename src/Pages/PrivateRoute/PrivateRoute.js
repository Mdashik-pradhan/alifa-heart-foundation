import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();

    if(isLoading) {
    
        return (
            <div className="h-screen bg-black text-center flex  pt-40 justify-center">
                <h1 className="text-2xl font-semibold text-white">Alifa Heart Foundation...</h1>
            </div>
        )
    }
    
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children :<Redirect 
            to={{
                pathname: "/login",
                state: {from: location}
            }}
        />
        
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;