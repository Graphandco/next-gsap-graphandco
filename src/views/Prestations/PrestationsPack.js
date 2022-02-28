import { FaPaintBrush, FaLock, FaMobileAlt } from "react-icons/fa"
import FadeIn from "../../animation/FadeIn"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "../../animation/useIsomorphicLayoutEffect"
import { FaArrowRight } from "react-icons/fa"

const PrestationsPack = ({ title, details }) => {
    useIsomorphicLayoutEffect(() => {
        gsap.to(".prestations__pack", {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.2,
            delay: 3.5,
        })
    }, [])

    return (
        <div className="prestations__pack">
            <h2>{title}</h2>
            <ul className="prestations__pack__details">
                {details.map((detail) => (
                    <li key={detail}>
                        <FaArrowRight />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
            <ul className="prestations__pack__include">
                <li className="prestations__pack__include__item">
                    <FaLock /> <span>Site sécurisé</span>
                </li>
                <li className="prestations__pack__include__item">
                    <FaMobileAlt />{" "}
                    <span>Adapté pour tablettes et smartphones</span>
                </li>
                <li className="prestations__pack__include__item">
                    <FaPaintBrush /> <span>Contenus éditables facilement</span>
                </li>
            </ul>
        </div>
    )
}

export default PrestationsPack
