import React from 'react';
import firebase from 'firebase';

export var FirestoreContext;

export default function FirestoreProvider({config, children}) {
  FirestoreContext = useFirebase(config);
  return (
    <FirestoreContext.Provider>
      { children }
    </FirestoreContext.Provider>
  );
}

function useFirebase(firebaseConfig) {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  
  return React.createContext(firebase.firestore());
}
