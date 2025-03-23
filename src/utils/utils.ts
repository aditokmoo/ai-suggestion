import { db } from "../config/firebase.config.js";

export const getGroupShoppingList = async (userId: string) => {
    const groupRef = await db.collection("groups").doc(userId).get();
    const groupData = groupRef.data();
    return groupData?.groupList || [];
}