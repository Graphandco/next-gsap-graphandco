import Image from "next/image"
import { useRef, useEffect } from "react"
import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from "react-icons/fa"
import { useWindowSize } from "../../hooks/useWindowSize"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Atouts = () => {
  const responsive = useWindowSize()

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(
      titleRef.current,
      { delay: 5 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "Elastic.easeOut",
        delay: 1.5,
        scrollTrigger: {
          start: "top bottom-=300",
          trigger: sectionRef.current,
          //toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.from(imgRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: imgRef.current,
      },
    })
    gsap.from(".atouts-item", {
      duration: 0.25,
      autoAlpha: 0,
      ease: "none",
      scale: 0,
      delay: 1,
      stagger: 0.25,
      scrollTrigger: {
        start: "top bottom-=100",
        trigger: sectionRef.current,
      },
    })
  }, [sectionRef])

  return (
    <section className="atouts">
      <div ref={sectionRef} className="atouts-wrapper">
        <div className="atouts-item atouts-item-1">
          <FaPaintBrush />
          <div className="atouts-title">Interface utilisateur</div>
          <p>Un site internet unique, au design innovant et moderne</p>
        </div>
        <div className="atouts-item atouts-item-2">
          <FaUserAlt />
          <div className="atouts-title">Expérience utilisateur</div>
          <p>Un site fonctionnel et accessible, une navigation claire</p>
        </div>
        <div className="atouts-item atouts-item-3">
          <FaLock />
          <div className="atouts-title">Sécurité</div>
          <p>
            Votre site est protégé, les données de vos visiteurs sont sécurisées
          </p>
        </div>
        <div className="atouts-item atouts-item-4">
          <FaMobileAlt />
          <div className="atouts-title">Accessibilité</div>
          <p>
            Un site accessible et intuitif sur tous les types de supports et
            tailles d'écrans
          </p>
        </div>
        <div className="atouts-hero" ref={imgRef}>
          <Image width={500} height={350} src="/img/atouts-woman.svg" />
          {/* {responsive !== "mobile" ? (
                        <Image
                            width={500}
                            height={350}
                            src="/img/atouts-woman.svg"
                        />
                    ) : (
                        ""
                    )} */}

          <h2 ref={titleRef}>Les atouts de votre site</h2>
        </div>
      </div>
    </section>
  )
}

export default Atouts
