import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import Constants from 'expo-constants';

const firebaseConfig = {
    //apiKey: Constants?.expoConfig?.extra?.apiKey,
    apiKey: "AIzaSyB7LZemDllX6H-uPmCMCRC9okopZmi89W8",
    //authDomain: Constants?.expoConfig?.extra?.authDomain,
    authDomain: "todos-app-dd9ec.firebaseapp.com",
    //projectId: Constants?.expoConfig?.extra?.projectId,
    projectId: "todos-app-dd9ec",
    //storageBucket: Constants?.expoConfig?.extra?.storageBucket,
    storageBucket: "todos-app-dd9ec.appspot.com",
    //messagingSenderId: Constants?.expoConfig?.extra?.messagingSenderId,
    messagingSenderId: "709795719829",
    //appId: Constants?.expoConfig?.extra?.appId,
    appId: "1:709795719829:web:3899177dc60377b640099c"
    
  };
  
  
  
  let firebaseApp: any;

  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    console.log(firebaseConfig.apiKey);
    console.log(firebaseApp);
  }

export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);