import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../components/firebase/config';

const useFirestore = (collect, condition) => {
  const collectionRef = collection(db, collect);

  if (condition) {
    if (!condition.compareValue || !condition.compareValue.length) {
      return;
    }
    query(collectionRef, where(condition.fieldName, condition.operator, condition.compareValue));
  }
  onSnapshot(collectionRef, () => {});
};
export default useFirestore;
