import { useLottie } from 'lottie-react';
import computer from './computer.json';

function LottieComputer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: computer,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const { View } = useLottie(defaultOptions);

    return <>{View}</>;
}

export default LottieComputer;
