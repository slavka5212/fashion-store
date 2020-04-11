import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbrGde-WG2vYgj9Ig6pedCdxoid7p9kyQ",
    authDomain: "fashion-store-18c68.firebaseapp.com",
    databaseURL: "https://fashion-store-18c68.firebaseio.com",
    projectId: "fashion-store-18c68",
    storageBucket: "fashion-store-18c68.appspot.com",
    messagingSenderId: "840220139128",
    appId: "1:840220139128:web:c10e37f5c384b62282178d",
    measurementId: "G-KWCSQ3XG45"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
        } catch (error) {
        console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;