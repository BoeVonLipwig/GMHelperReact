import {CharacterModel} from "./CharacterModel";
// @ts-ignore
import QuerySnapshot = firebase.firestore.QuerySnapshot;
// @ts-ignore
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

const firebase = require("firebase");
require("firebase/firestore");


export class FirebaseController {

    // @ts-ignore
    static firestore: firebase.firestore.Firestore;

    static init() {
        let config = {
            apiKey: "AIzaSyDZNTpTRsR1S3m-BYmEiD3KoQYS-QO-r-8",
            authDomain: "reactbs-dcb4c.firebaseapp.com",
            databaseURL: "https://reactbs-dcb4c.firebaseio.com",
            projectId: "reactbs-dcb4c",
            storageBucket: "reactbs-dcb4c.appspot.com",
            messagingSenderId: "184042537896"
        };
        firebase.initializeApp(config);
        FirebaseController.firestore = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        FirebaseController.firestore.settings(settings);
    }

    static send(char: CharacterModel, type: string) {
        return FirebaseController.firestore.collection(type).doc(char.id).set({
            maxHitPoints: char.maxHitPoints,
            curHitPoints: char.curHitPoints,
            armorClass: char.armorClass,
            stats: char.stats,
            name: char.name,
            race: char.race,
            class: char.class

        });
    }

    static getChars(querySnapshot: QuerySnapshot): CharacterModel[] {
        const chars: CharacterModel[] = [];
        querySnapshot.forEach(function (documentSnapshot: DocumentSnapshot) {
            let char = JSON.parse(JSON.stringify(documentSnapshot.data()));
            chars.push(char);
        });
        console.log(chars[0]);
        console.log("asdasdasd");
        return chars;
    }

    static async downloadAllChars(type: string) {
        return FirebaseController.firestore.collection(type).get();
    }
}
