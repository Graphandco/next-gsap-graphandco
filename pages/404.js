import Custom404 from '../src/components/Custom404';
import Wrapper from '../src/layout/Wrapper';

const Page404 = () => (
    <Wrapper
        url="https://tweenpages.vercel.app/two"
        title="Contact | Graph and Co"
        description="404"
        twitter="johnpolacek"
        imageUrl="https://tweenpages.vercel.app/project-logo.png"
        imageAlt="TweenPages Logo"
        background="linear-gradient(90deg, hsl(205deg 44% 21%), rgb(30, 16, 18))"
    >
        <Custom404 />
    </Wrapper>
);

export default Page404;
