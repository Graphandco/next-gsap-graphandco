import Wrapper from "../src/layout/Wrapper"
import MentionsLegales from "../src/views/MentionsLegales"

const MentionslegalesPage = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/two"
        title="Mentions légales | Graph and Co"
        description="Mentions légales du site graphandco.com"
        twitter="johnpolacek"
        imageUrl="https://tweenpages.vercel.app/project-logo.png"
        imageAlt="TweenPages Logo"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(12, 16, 18))"
    >
        <MentionsLegales />
    </Wrapper>
)

export default MentionslegalesPage
