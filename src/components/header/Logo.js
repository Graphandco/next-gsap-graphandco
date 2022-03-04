import { gsap } from 'gsap';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../../animation/useIsomorphicLayoutEffect';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    const icon = useRef();
    const text = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.set(icon.current, { x: -20 });
        gsap.to(icon.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: 'power4.out',
        });
        gsap.set(text.current, { x: -10 });
        gsap.to(text.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.75,
            ease: 'power4.out',
        });
    }, []);

    return (
        <div className="site-logo">
            <Link href="/">
                <a>
                    <div>
                        <div className="logo-image" ref={icon}>
                            <Image src="/img/logo.svg" alt="Site Logo" width={45} height={45} />
                        </div>
                    </div>
                    <div className="site-name" ref={text}>
                        Graph & Co
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Logo;
