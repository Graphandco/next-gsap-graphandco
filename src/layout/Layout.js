import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';
import { useContext } from 'react';
import { TransitionContext } from '../context/TransitionContext';
import Head from './Head';

const Layout = (props) => {
    const { setBackground } = useContext(TransitionContext);

    useIsomorphicLayoutEffect(() => {
        setBackground(props.background || 'white');
    }, [props.background]);

    return (
        <>
            <Head {...props} />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
