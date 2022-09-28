import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRVxwYOO6YMjFHRkH5uT9TEbJsGkuLy-g',
  authDomain: 'chat-app-a4045.firebaseapp.com',
  projectId: 'chat-app-a4045',
  storageBucket: 'chat-app-a4045.appspot.com',
  messagingSenderId: '255837582110',
  appId: '1:255837582110:web:a41bc30f0668f7632fcf0f',
  measurementId: 'G-0SYQDM1PX4',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const provider = new FacebookAuthProvider();
const auth = getAuth();

export { analytics, provider, auth };
