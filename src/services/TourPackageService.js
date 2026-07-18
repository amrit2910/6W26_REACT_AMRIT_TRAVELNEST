import TourPackageModel from "../model/TourPackageModel";

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

class TourPackageService {

    async add(data) {

        let newPackage = new TourPackageModel();

        newPackage.destinationId = data.destinationId;
        newPackage.categoryId = data.categoryId;
        newPackage.packageName = data.packageName;
        newPackage.description = data.description;
        newPackage.duration = data.duration;
        newPackage.price = data.price;
        newPackage.maxPeople = data.maxPeople;
        newPackage.itinerary = data.itinerary;
        newPackage.images = data.images;
        newPackage.status = data.status;
        newPackage.createdAt = new Date().toISOString();
        newPackage.updatedAt = new Date().toISOString();

        const docRef = await addDoc(
            collection(db, "tourPackages"),
            { ...newPackage }
        );

        return docRef;
    }

    async all() {

        const querySnapshot = await getDocs(
            collection(db, "tourPackages")
        );

        let packages = [];

        querySnapshot.forEach((doc) => {

            packages.push({
                id: doc.id,
                ...doc.data()
            });

        });

        return packages;
    }

    async single(id) {

        const docRef = doc(db, "tourPackages", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            return {
                id: docSnap.id,
                ...docSnap.data()
            };

        }

        return null;
    }

    async deletePackage(id) {

        await deleteDoc(
            doc(db, "tourPackages", id)
        );
    }

    async update(data, id) {

        const packageRef = doc(
            db,
            "tourPackages",
            id
        );

        await updateDoc(packageRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
    }
}

export default new TourPackageService();