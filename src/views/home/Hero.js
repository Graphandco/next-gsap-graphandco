// import { Flex, Box, Text, Image, Button } from "theme-ui"
import { useEffect } from "react"
import ImplodeExplodeInOut from "../../animation/ImplodeExplodeInOut"
import FadeInOutUp from "../../animation/FadeInOutUp"
import ScaleInOut from "../../animation/ScaleInOut"
// import HomeAnimation from "../../animation/HomeAnimation"
import LinkButton from "../../ui/LinkButton"
import LottieRocket from "../../animation/lottie/LottieRocket"

const Hero = () => {
  useEffect(() => {
    document.body.setAttribute("id", "index")
    window.scrollTo(0, 0)
    return () => {
      document.body.removeAttribute("id", "index")
    }
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <FadeInOutUp delay={2} y={-40}>
            <div className="hero-subtitle">Un métier, une passion</div>
          </FadeInOutUp>

          <ImplodeExplodeInOut target=".hero-title">
            <div className="hero-title">Création de sites web</div>
          </ImplodeExplodeInOut>
          <FadeInOutUp delay={3}>
            <div className="hero-description">
              Nous sommes spécialisés dans la réalisation de sites web modernes
              et intuitifs.
            </div>
          </FadeInOutUp>
          <ScaleInOut as="div" delay={4} yellow>
            <div className="hero-cta">
              <LinkButton name="Voir nos prestations" link="/prestations" />
            </div>
          </ScaleInOut>
        </div>
        <FadeInOutUp delay={2.8} y={100}>
          <div className="hero-lottie">
            <LottieRocket />
          </div>
        </FadeInOutUp>
      </section>
      {/* <Flex
            sx={{
                p: [0, 4],
                flex: 1,
                color: "white",
                flexWrap: "wrap",
            }}
        >
            <Flex
                sx={{
                    width: ["100%", "100%", "50%"],
                    py: [0, 4],
                    px: 4,
                    alignItems: "center",
                    flexDirection: ["column", "row"],
                }}
            >
                <Box>
                    <FadeInOutUp>
                        <div className="site-heading">
                            Création de sites web
                        </div>
                    </FadeInOutUp>
                    <div className="lead">
                        <ImplodeExplodeInOut target="p">
                            <p>
                                Nous sommes spécialisés dans la réalisation de
                                sites web modernes et intuitifs.
                            </p>
                        </ImplodeExplodeInOut>
                    </div>

                    <ScaleInOut as="div" delay={4} yellow>
                        <LinkButton
                            name="Voir nos prestations"
                            link="/prestations"
                        />
                    </ScaleInOut>

                    <Flex
                        sx={{
                            flexDirection: [
                                "column",
                                "column",
                                "column",
                                "row",
                            ],
                            width: "100%",
                            mb: 3,
                            maxWidth: ["300px", "300px", "none"],
                            mx: "auto",
                        }}
                    >
                       
                    </Flex>
                </Box>
            </Flex>
            <Box sx={{ width: ["100%", "100%", "50%"] }}>
                <HomeAnimation />
            </Box>
        </Flex> */}
    </>
  )
}

export default Hero
