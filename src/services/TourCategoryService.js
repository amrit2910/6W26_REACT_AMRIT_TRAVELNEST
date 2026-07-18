import TourCategoryModel from "../model/TourCategoryModel";

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

class TourCategoryService {

    async add(data) {

        let newCategory = new TourCategoryModel();

        newCategory.name = data.name;
        newCategory.description = data.description;
        newCategory.status = data.status;
        newCategory.createdAt = new Date().toISOString();
        newCategory.updatedAt = new Date().toISOString();

        const docRef = await addDoc(
            collection(db, "tourCategories"),
            { ...newCategory }
        );

        return docRef;
    }

    async all() {

        const querySnapshot = await getDocs(
            collection(db, "tourCategories")
        );

        let categories = [];

        querySnapshot.forEach((doc) => {
            categories.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return categories;
    }

    async single(id) {

        const docRef = doc(db, "tourCategories", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        }

        return null;
    }

    async deleteCategory(id) {

        await deleteDoc(
            doc(db, "tourCategories", id)
        );
    }

    async update(data, id) {

        const categoryRef = doc(
            db,
            "tourCategories",
            id
        );

        await updateDoc(categoryRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
    }
}

export default new TourCategoryService();