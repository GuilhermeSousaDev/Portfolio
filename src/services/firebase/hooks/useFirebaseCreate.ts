import { getDatabase, push, ref, set } from "firebase/database";
import { app } from "..";

interface IProps {
    path: string;
    data: any;
}

export const useFirebaseCreate = ({ path, data }: IProps) => {
    const db = getDatabase(app);
    const pathRef = ref(db, path);

    const child = push(pathRef);

    set(child, data)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}