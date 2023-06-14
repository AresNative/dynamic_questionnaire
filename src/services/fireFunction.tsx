import { v4 } from 'uuid';
import { query, collection, getFirestore, where, doc, setDoc, deleteDoc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
//------------------------------------------|inquiries NO realtime|------------------------------------------//
export const searchData = async (data: any, tabla: any, format: string) => {
     try {
          const q = query(collection(getFirestore(), tabla), where(format, "==", data));
          let cities: any = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
               cities.push(doc.data());
          });
          return cities;
     } catch (error) {
          console.error("Error al buscar tabla " + tabla, error);
          return null;
     }
};
export const getTabla = async (tabla: any) => {
     try {
          const q = query(collection(getFirestore(), tabla));
          let cities: any = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
               cities.push(doc.data());
          });
          return cities;
     } catch (error) {
          console.error("Error al buscar tabla " + tabla, error);
          return null;
     }
};
//------------------------------------------| inquiries IN realtime |------------------------------------------//
export const useRealtimeData = (tableName: string, setData: (data: any) => void) => {
     useEffect(() => {
          const unsubscribe = onSnapshot(collection(getFirestore(), tableName),
               (querySnapshot) => {
                    const data: any = [];
                    querySnapshot.forEach((doc: any) => {
                         data.push(doc.data());
                    });
                    setData(data);
               });
          return () => unsubscribe();
     }, [tableName, setData]);
};
export const useRealtimeSearchData = (tableName: string, setData:
     (data: any) => void, format: string, data: any) => {
     useEffect(() => {
          const q = query(
               collection(getFirestore(), tableName),
               where(format, '==', data)
          );
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
               const data: any = [];
               querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
               });
               setData(data);
          });
          return () => unsubscribe();
     }, [tableName, setData, format, data]);
};
//------------------------------------------/ /// /------------------------------------------//
export const DeleteData = async (tabla: string, uid: string) => {
     try {
          await deleteDoc(doc(getFirestore(), tabla, uid));
          return "Elemento borrado"
     } catch {
          return "Algo salio mal, vualva a intentar mas tarde"
     }
}
export const AddData = async (table: string, info: any) => {
     try {
          const unique_id = v4();
          const docRef = doc(getFirestore(), table, unique_id);
          const date = new Date();
          await setDoc(docRef, {
               id: unique_id,
               data: info ?? "",
               date_creation: date.toISOString(),
          }, { merge: true })
          return { status: "success", message: "Registro aceptado" };
     } catch (error: any) {
          return `Error: ${error.message}`;
     }
};