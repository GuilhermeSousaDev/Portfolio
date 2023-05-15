import { getDatabase, ref, update } from "firebase/database"
import { app } from ".."

type IUpdates = {
    [key: string]: any;
}

interface IProps {
    path: string;
    value: any;
}

export const useFirebaseUpdate = ({ path, value }: IProps) => {
    const updates: IUpdates = {};
    const db = getDatabase(app);
    const dbRef = ref(db);

    updates[path] = value;
    update(dbRef, updates);
}