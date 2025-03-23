import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./groupcart-firebase-adminsdk.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

export const db = getFirestore();