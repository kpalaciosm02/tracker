/*import React from "react";
import CardGrid from "../components/cardGrid";
import Acount from "../classes/Acount"

const sampleData = [
    { name: "Alice", status: "Parent", pictureUrl: "./assets/placeholder.png" },
    { name: "Bob", status: "Child", pictureUrl: "./assets/placeholder.png" },
    { name: "Charlie", status: "Child", pictureUrl: "./assets/placeholder.png" },
    { name: "Diana", status: "Child", pictureUrl: "./assets/placeholder.png" },
]

const UserSelector = () => {
    return (
        <div>
            <h1>Welcome to family members</h1>
            <CardGrid items={sampleData} />
        </div>
    );
};

export default UserSelector;*/

import React, { useEffect, useState } from "react";
import CardGrid from "../components/cardGrid";
import Account from "../classes/Account";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const UserSelector = () => {
    const [userAccounts, setUserAccounts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "users"));
            const accounts = querySnapshot.docs.map((doc) =>
                new Account(
                    doc.data().name,
                    1234,
                    doc.data().userId,
                    doc.data().userType,
                    doc.data().pictureUrl || "./assets/placeholder.png"
                )
            );
            //console.log(accounts);
            setUserAccounts(accounts.map((account) => account.getDisplayInfo()));
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to family members</h1>
            <CardGrid items={userAccounts} />
        </div>
    );
};

export default UserSelector;
