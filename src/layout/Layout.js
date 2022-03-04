import useIsomorphicLayoutEffect from '../animation/useIsomorphicLayoutEffect';
import { useEffect, useContext } from 'react';
import { TransitionContext } from '../context/TransitionContext';
import Head from './Head';

const Layout = (props) => {
    const { setBackground } = useContext(TransitionContext);

    useEffect(() => {
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
