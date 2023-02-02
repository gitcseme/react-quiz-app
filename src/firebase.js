import { initializeApp } from "firebase/app";

// const app = initializeApp({
//     apiKey: process.env.REACT_API_KEY,
//     authDomain: process.env.REACT_API_AUTH_DOMAIN,
//     projectId: process.env.REACT_API_PROJECT_ID,
//     storageBucket: process.env.REACT_API_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_API_MASSAGING_SENDER_ID,
//     appId: process.env.REACT_API_APP_ID,
// });

const firebaseConfig = {
  apiKey: "AIzaSyAwDJIXwVX4Dr7ZFzsirdw0SqgLSGdMHoI",
  authDomain: "react-quiz-dev-6e22d.firebaseapp.com",
  projectId: "react-quiz-dev-6e22d",
  storageBucket: "react-quiz-dev-6e22d.appspot.com",
  messagingSenderId: "733056037703",
  appId: "1:733056037703:web:a4f94f90f4c5aa1e8fd262",
};

const app = initializeApp(firebaseConfig);

export default app;
