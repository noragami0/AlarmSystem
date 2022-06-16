import { firebase } from "@react-native-firebase/messaging"

export default class Firebase {
    
    static getToken = async () => {
        try { return await firebase.messaging().getToken() }
        catch{ (e) => console.log(e) }
    }

}