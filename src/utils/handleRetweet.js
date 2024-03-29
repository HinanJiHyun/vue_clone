import { RETWEET_COLLECTION, TWEET_COLLECTION } from "../firebase";
import store from '../store';
import firebase from "firebase";

export default async(tweet) => {
  try{
    const doc = RETWEET_COLLECTION.doc()
    await doc.set({
      "id": doc.id,
      "from_tweet_id": tweet.id,
      "uid": store.state.user.uid,
      "create_at": Date.now()
    })
  
    // TWEET_COLLECTION) num_retweets + 1
    await TWEET_COLLECTION.doc(tweet.id).update({
      num_retweets: firebase.firestore.FieldValue.increment(1),
    })
  } catch(e){
    console.log("handle retweet error: ", e)
  }
}