import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-qkLfd4g3nrXA1cEaEg866OOmhW66pE4",
  authDomain: "twitter-clone-project-8fbe0.firebaseapp.com",
  projectId: "twitter-clone-project-8fbe0",
  storageBucket: "twitter-clone-project-8fbe0.appspot.com",
  messagingSenderId: "165771541361",
  appId: "1:165771541361:web:1cfcc4bacb928cfd2094d0"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection("users")
export const TWEET_COLLECTION = db.collection("tweets")
export const COMMENT_COLLECTION = db.collection("comments")
export const RETWEET_COLLECTION = db.collection("retweets")