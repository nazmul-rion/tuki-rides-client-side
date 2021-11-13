import React from 'react';
import Loader from 'react-loader-spinner';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();

    if (loading) {
        return <div className="d-flex justify-content-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}

            />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.displayName && admin) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default AdminRoute
