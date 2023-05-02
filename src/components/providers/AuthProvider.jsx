import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign user

    const signUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google

    const googleAuthProvider = new GoogleAuthProvider();

    // github

    const gitHubAuthProvider = new GithubAuthProvider();

    // observer

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(true);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signUser,
        logOut,
        auth,
        googleAuthProvider,
        gitHubAuthProvider,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;