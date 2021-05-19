import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhV49ne7l6kQPdGb_JTBu_E76z0FGIfns",
    authDomain: "fb-itss.firebaseapp.com",
    projectId: "fb-itss",
    storageBucket: "fb-itss.appspot.com",
    messagingSenderId: "688257836805",
    appId: "1:688257836805:web:1a39048b9fba25eab6b96c"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase;

export const getFirebaseItems = async () => {
    try {
        const snapshot = await db
            .collection("todos")
            .get();
        const items = snapshot.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id })
        );
        return items;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const addFirebaseItem = async (item) => {
    try {
        const todoRef = db.collection("todos");
        await todoRef.add(item);
    } catch (err) {
        console.log(err);
    }
}

export const updateFirebaseItem = async (item, id) => {
    try {
        const todoRef = db.collection("todos").doc(id);
        await todoRef.update(item);
    } catch (err) {
        console.log(err);
    }
}

export const clearFirebaseItem = async (item) => {
    const todoRef = db.collection("todos").doc(item.id);
    await todoRef.delete().then(function () {
    
    }).catch(function (err) {
        console.log(err);
    });
};