import { TransitionProvider } from '../src/context/TransitionContext';
import TransitionLayout from '../src/animation/TransitionLayout';
import Header from '../src/components/header/Header';

import '../src/styles/style.scss';
import Footer from '../src/components/footer/Footer';

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionProvider>
            <TransitionLayout>
                <div className="site-wrapper">
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </TransitionLayout>
        </TransitionProvider>
    );
}
