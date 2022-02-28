import { TransitionProvider } from "../src/context/TransitionContext"
import TransitionLayout from "../src/animation/TransitionLayout"
import { Box } from "theme-ui"
import Header from "../src/ui/Header"
import Footer from "../src/views/Footer"
import "../src/styles/style.scss"

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
    )
}
