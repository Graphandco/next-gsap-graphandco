import { gsap } from "gsap"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import Link from "next/link"
import { Box, Text, Image } from "theme-ui"
import { Link as A } from "theme-ui"

const NavHome = () => {
  const icon = useRef()
  const text = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.set(icon.current, { x: -20 })
    gsap.to(icon.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    })
    gsap.set(text.current, { x: -10 })
    gsap.to(text.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.75,
      ease: "power4.out",
    })
  }, [])

  return (
    <div className="header__left">
      <Link href="/">
        <a>
          <div>
            <div
              className="logo"
              ref={icon}
              style={{ opacity: 0, display: "inline-block" }}
            >
              <Image
                src="/img/logo.svg"
                alt="Site Logo"
                sx={{
                  height: "45px",
                  position: "relative",
                  top: "5px",
                }}
              />
            </div>
          </div>
          <div className="logo-text" ref={text} style={{ opacity: 0 }}>
            Graph & Co
          </div>
        </a>
      </Link>
    </div>
  )
}

export default NavHome
