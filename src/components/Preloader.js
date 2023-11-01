import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';

const words = ['Bonjour', 'Hello', 'Ciao', 'Olà', 'やあ', 'Hallå', 'Guten tag', 'Hallo'];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(
            () => {
                setIndex(index + 1);
            },
            index == 0 ? 2000 : 150
        );
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
        dimension.height
    }  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${
        dimension.height
    }  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };
    const opacity = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: { duration: 1, delay: 0.2 },
        },
    };

    const slideUp = {
        initial: {
            top: 0,
        },
        exit: {
            top: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
    };

    return (
        <CustomLoader>
            <motion.div variants={slideUp} initial="initial" exit="exit" className="loader">
                {dimension.width > 0 && (
                    <>
                        <img src="/img/logo-dark.svg" alt="Site Logo" width={200} height={200} className="loader-logo" />
                        <motion.p variants={opacity} initial="initial" animate="enter">
                            <span></span>
                            {words[index]}
                        </motion.p>
                        <svg>
                            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                        </svg>
                    </>
                )}
            </motion.div>
        </CustomLoader>
    );
}

const CustomLoader = styled.div`
    .loader {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 99;
        /* background-color: #141516; */
        background-color: var(--secondary);
        .loader-logo {
            position: relative;
            z-index: 1;
            opacity: 0.1;
        }
        svg {
            position: absolute;
            top: 0;
            width: 100%;
            height: calc(100% + 300px);
            path {
                /* fill: #141516; */
                fill: var(--primary);
            }
        }
        p {
            display: flex;
            color: var(--secondary);
            font-size: 42px;
            align-items: center;
            /* position: absolute; */
            z-index: 1;
            span {
                display: block;
                width: 10px;
                height: 10px;
                background-color: var(--secondary);
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
`;
