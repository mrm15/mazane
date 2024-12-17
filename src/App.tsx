import './App.css'
import Pages from "./Pages/Pages";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, {useContext, useEffect, useRef} from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import UpdateInfo from "./UpdateInfo.tsx";
import { Toaster } from 'react-hot-toast';
import useAuth from "./hooks/useAuth.tsx";

const App: React.FC = () => {
    const offlineToastRef = useRef<any>(null);

    // Check if the device is mobile
    const isMobile = () => window.innerWidth <= 768; // Common breakpoint for mobile devices


    const { auth, setAuth } = useAuth();
    useEffect(() => {
        // Function to handle window resizing
        const handleResize = () => {
            const mobileStatus = isMobile();
            if (mobileStatus) {
                setAuth((prev: any) => ({ ...prev, isMobile: true }));
                console.log('User is on a mobile device.');
            } else {
                setAuth((prev: any) => ({ ...prev, isMobile: false }));
                console.log('User is not on a mobile device.');
            }
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setAuth]);




    useEffect(() => {

        const updateOnlineStatus = () => {
            const isOnline = navigator.onLine;
            if (isOnline) {
                toast.dismiss(offlineToastRef.current);
                toast.success('ارتباط بر قرار شد. 😎', {
                    position: 'bottom-center',
                });
            } else {
                offlineToastRef.current = toast.error('دسترسی به  اینترنت نداریم!😕', {
                    position: 'bottom-center',
                    autoClose: false,
                });
            }
        };

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return (
        <>
            <div className={"rtl"}>
                <Toaster

                    reverseOrder={true}
                />
            </div>
            <UpdateInfo/>
            <ToastContainer
                position="bottom-left"
                autoClose={2500}
                rtl
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <ErrorBoundary>
                <Pages/>
            </ErrorBoundary>
        </>
    );
};

export default App;


// Add a request interceptor
