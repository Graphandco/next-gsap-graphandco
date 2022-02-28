import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import { useEffect, useContext } from "react"
import { TransitionContext } from "../context/TransitionContext"
import Head from "./Head"
import Style from "./Style"

const Layout = (props) => {
    const { setBackground } = useContext(TransitionContext)

    useEffect(() => {
        setBackground(props.background || "white")
    }, [props.background])

    return (
        <>
            <Head {...props} />
            <main>{props.children}</main>
            <Style />
        </>
    )
}

export default Layout
