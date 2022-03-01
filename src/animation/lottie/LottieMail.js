import { useLottie } from 'lottie-react';
import mail from './mail.json';

function LottieMail() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: mail,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const { View } = useLottie(defaultOptions);

    return <>{View}</>;
}

export default LottieMail;
