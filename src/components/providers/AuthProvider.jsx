import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign user

    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout

    const logOut = () => {
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
        gitHubAuthProvider
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;