import { firestoreDB, Review } from "@/api/firebase.config"
import { addDoc, collection, Timestamp } from "firebase/firestore"

export const useCreateReview = () => {


    const createReview = async (data: Partial<Review>) => {

        const reviewRef = collection(firestoreDB, "reviews")
        await addDoc(reviewRef, {
            approved: false,
            created: Timestamp.now(),
            message: data.message,
            name: data.name,
            rating: data.rating,
        } as Review)

    }

    return { createReview } as const
}