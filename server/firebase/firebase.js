// firebase.js
import admin from 'firebase-admin';
import serviceAccount from './secretSDK/sample-firebase-ai-apps-cf84c-firebase-adminsdk-wzsnx-db5aaf4946.json' assert { type: 'json' };


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-firebase-ai-apps-cf84c.firebaseio.com"  // Ganti dengan project ID Firebase Anda
});

// Mengecek apakah koneksi berhasil
(async () => {
    try {
      await admin.auth().listUsers(1000);
      console.log("Firebase Admin SDK connected successfully!");
    } catch (error) {
      console.error("Error connecting to Firebase Admin SDK:", error);
    }
  })();
  

export default admin;
