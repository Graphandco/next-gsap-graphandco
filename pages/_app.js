// import { useState, useEffect } from 'react';
import { TransitionProvider } from '../src/context/TransitionContext';
import TransitionLayout from '../src/animation/TransitionLayout';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import '../src/styles/style.scss';
import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Preloader from '../src/components/Preloader';

export default function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                // window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    return (
        <TransitionProvider>
            <TransitionLayout>
                <div className="site-wrapper">
                    {/* <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence> */}
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </TransitionLayout>
        </TransitionProvider>
    );
}
