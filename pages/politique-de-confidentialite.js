import Wrapper from "../src/layout/Wrapper"
import PolitiqueConfidentialite from "../src/views/PolitiqueConfidentialite"

const PolitiqueConfidentialitePage = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/two"
        title="Politique de confidentialité | Graph and Co"
        description="Politique de confidentialité du site graphandco.com"
        twitter="johnpolacek"
        imageUrl="https://tweenpages.vercel.app/project-logo.png"
        imageAlt="TweenPages Logo"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <PolitiqueConfidentialite />
    </Wrapper>
)

export default PolitiqueConfidentialitePage
