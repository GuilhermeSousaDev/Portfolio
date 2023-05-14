import React, { useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "..";

interface IProps {
    path: string;
    setState: React.Dispatch<React.SetStateAction<any[]>>;
}

export const useFirebaseFind = ({ path, setState }: IProps) => {
    const db = getDatabase(app);

    useEffect(() => {
        const query = ref(db, path);

        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            setState([]);
            if (snapshot.exists()) {
                Object.values(data).map((newState) => {
                    setState((prevState: any) => [...prevState, newState]);
                });
            }
        });
    }, []);
}