import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';

export default function FirestoreCollection(props) {
  var [loading, collection] = useFetchFirestoreCollection(firebase.firestore(), props.path);
  return (
    <Fragment>
      { 
        props.render(loading, collection) 
      }
    </Fragment>
  );
}

function useFetchFirestoreCollection(firestore, path) {
  const [loading, setLoading] = useState(true);

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    firestore
      .collection(path)
      .limit(10)
      .get()
      .then((querySnapshot) => {
        setLoading(false);
        if (!querySnapshot.empty) {
          var docs = querySnapshot.docs
            .map((queryDocumentSnapshot) => {
              return {
                id: queryDocumentSnapshot.id,
                ...queryDocumentSnapshot.data()
              };
            });
          setCollection(docs);
        }
      });
  }, [firestore, path]);

  return [loading, collection];
}