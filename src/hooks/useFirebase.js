import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from '../config/firebase';
import swal from 'sweetalert';


//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';



    useEffect(() => {
        fetch(`https://tuki-rides-nazmul-rion.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }

            setLoading(false);
        })
    }, [auth])

    //sign up functionality
    const signUpUser = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setLoading(true);
                setUser(res.user);
                saveUser(email, name, image, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {

                    swal("Sign Up!", "Sign Up Successfull", "success");

                    history.push(redirectUrl);
                })

            }).finally(() => setLoading(false)).catch(err => setError(err.message));
    }

    //sign in functionality
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setLoading(true);
                setUser(res.user);
                swal("Sign in!", "Sign in Successfull", "success");
                history.push(redirectUrl);
            }).finally(() => setLoading(false))
            .catch(err => setError(err.message))
    }


    //google sign in 
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setLoading(true);
                setUser(res.user);
                saveUser(res.user.email, res.user.displayName, res.user.photoURL, "PUT");
                swal("Sign in!", "Sign in Successfull", "success");
                history.push(redirectUrl);
            }).finally(() => setLoading(false)).catch(err => setError(err.message))
    }

    // sign out 
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
            swal("Sign Out!", "Sign out Successfull", "error");
            history.push('/signin')
        }).finally(() => setLoading(false)).catch((err) => {
            setError(err.message);
        });
    }

    const saveUser = (email, displayName, photoURL, method) => {
        const user = { email, displayName, photoURL };
        fetch('https://tuki-rides-nazmul-rion.onrender.com/adduser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        error,
        loading,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }
}

export default useFirebase
