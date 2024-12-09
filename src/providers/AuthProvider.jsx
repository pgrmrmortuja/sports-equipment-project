import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { setPersistence, browserLocalPersistence } from "firebase/auth";


export const AuthContext = createContext();
export const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    console.log(user);

    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            (currentUser) => {
                setUser(currentUser);

                setLoading(false);
            }

        );

        return () => {
            unsubscribe();
        }
    }, []);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //         if (currentUser) {
    //             await currentUser.reload(); // Ensure to reload the currentUser to get fresh data
    //             setUser(auth.currentUser);
    //         } else {
    //             setUser(null);
    //         }
    //         setLoading(false);
    //     });

    //     return () => unsubscribe();
    // }, []);

    // useEffect(() => {
    //     setPersistence(auth, browserLocalPersistence)
    //         .then(() => {})
    //         .catch((error) => console.error("Failed to set persistence:", error.message));
    // }, []);

    const updateUserProfile = (updateData) => {
        // setTimeout(() => {
        //     setLoading(true);
        // }, 1000);

        return updateProfile(auth.currentUser, updateData);
    }

    // const updateUserProfile = async (updateData) => {
    //     try {

    //         await updateProfile(auth.currentUser, updateData);


    //         await auth.currentUser.reload();


    //         const refreshedUser = auth.currentUser;
    //         setUser(refreshedUser);  
    //     } catch (error) {
    //         console.error("Error updating profile:", error.message);
    //         throw error;  
    //     }
    // };



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        signInWithGoogle,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;