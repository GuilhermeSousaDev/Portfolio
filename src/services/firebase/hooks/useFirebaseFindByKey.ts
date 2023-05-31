import React, { useEffect } from "react";
import { child, get, getDatabase, ref } from "firebase/database"
import { app } from "..";

interface IProps {
    path: string;
    setState: React.Dispatch<React.SetStateAction<any>>;
}

export const useFirebaseFindByKey = ({ path, setState }: IProps) => {
    const dbRef = ref(getDatabase(app));

    useEffect(() => {
        get(child(dbRef, path)).then((snapshot) => {
            setState(snapshot.val());
        });
    }, []);
}