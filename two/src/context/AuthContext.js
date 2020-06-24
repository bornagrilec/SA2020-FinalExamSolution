import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = props => {
    const [authToken, setAuthToken] = useState('pending');

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };