import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userID) => {
    try {
      const items = [];
      const itemsRef = collection(db, `users/${userID}/items`);
      const q = query(itemsRef);
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() }); 
      });
  
      return items; 
    } catch (error) {
      console.error(`Error getting documents for userID ${userID}:`, error);
      throw error;
    }
  };

  const addItem = async (userID, item) => {
    try {
      const itemsRef = collection(db, `users/${userID}/items`);
      const docRef = await addDoc(itemsRef, item);
      return docRef.id; 
    } catch (error) {
      console.error(`Error adding document for userID ${userID}:`, error);
      throw error;
    }
  };
  
  export { getItems, addItem };