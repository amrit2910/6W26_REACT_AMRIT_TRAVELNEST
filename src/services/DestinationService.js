import DestinationModel from "../model/DestinationModel";

import {
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    getDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

class DestinationService {

    async add(data) {
        let newDestination = new DestinationModel();

        newDestination.name = data.name;
        newDestination.state = data.state;
        newDestination.country = data.country;
        newDestination.description = data.description;
        newDestination.bestSeason = data.bestSeason;
        newDestination.images = data.images;
        newDestination.status = data.status;
        newDestination.createdAt = new Date().toISOString();
        newDestination.updatedAt = new Date().toISOString();

        const docRef = await addDoc(
            collection(db, "destinations"),
            { ...newDestination }
        );

        return docRef;
    }

    async all() {
        const querySnapshot = await getDocs(
            collection(db, "destinations")
        );

        let destinations = [];

        querySnapshot.forEach((doc) => {
            destinations.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return destinations;
    }

    async single(id) {
        const docRef = doc(db, "destinations", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        }

        return null;
    }

    async deleteDestination(id) {
        await deleteDoc(
            doc(db, "destinations", id)
        );
    }

    async update(data, id) {
        const destinationRef = doc(
            db,
            "destinations",
            id
        );

        await updateDoc(destinationRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
    }
}

export default new DestinationService();