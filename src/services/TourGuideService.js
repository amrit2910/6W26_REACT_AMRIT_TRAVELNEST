import TourGuideModel from "../model/TourGuideModel";

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

class TourGuideService {

    async add(data) {

        let newGuide = new TourGuideModel();

        newGuide.name = data.name;
        newGuide.phone = data.phone;
        newGuide.email = data.email;
        newGuide.languages = data.languages;
        newGuide.experience = data.experience;
        newGuide.guideFee = data.guideFee;
        newGuide.profileImage = data.profileImage;
        newGuide.availability = data.availability;
        newGuide.createdAt = new Date().toISOString();
        newGuide.updatedAt = new Date().toISOString();

        const docRef = await addDoc(
            collection(db, "tourGuides"),
            { ...newGuide }
        );

        return docRef;
    }

    async all() {

        const querySnapshot = await getDocs(
            collection(db, "tourGuides")
        );

        let guides = [];

        querySnapshot.forEach((doc) => {

            guides.push({
                id: doc.id,
                ...doc.data()
            });

        });

        return guides;
    }

    async single(id) {

        const docRef = doc(db, "tourGuides", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            return {
                id: docSnap.id,
                ...docSnap.data()
            };

        }

        return null;
    }

    async deleteGuide(id) {

        await deleteDoc(
            doc(db, "tourGuides", id)
        );
    }

    async update(data, id) {

        const guideRef = doc(
            db,
            "tourGuides",
            id
        );

        await updateDoc(guideRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
    }
}

export default new TourGuideService();