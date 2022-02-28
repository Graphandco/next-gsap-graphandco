import React, { useEffect, useState } from "react"

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    const [isResponsive, setIsResponsive] = useState("desktop")
    useEffect(() => {
        function updateSize() {
            // console.log("updateSize", window.innerWidth, window.innerHeight)
            setSize([window.innerWidth, window.innerHeight])
            if (window.innerWidth < 767) {
                setIsResponsive("mobile")
            } else if (window.innerWidth < 1024) {
                setIsResponsive("tablet")
            } else {
                setIsResponsive("desktop")
            }
        }
        window.addEventListener("resize", updateSize)
        updateSize()
        return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size, isResponsive
}

module.exports = { useWindowSize }
