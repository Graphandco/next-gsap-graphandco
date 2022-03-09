import Link from 'next/link';
import Image from 'next/image';
import RotateInOut3D from '../../animation/RotateInOut3D';

const GridItem = ({ title, slug, imgSrc, width, height, description, url }) => {
    return (
        <div className={`grid-item ${slug}`}>
            <RotateInOut3D duration={1 + Math.random()} delay={0.5 + Math.random()} offsetY={120}>
                <Link href={`realisations/${slug}`}>
                    <a>
                        {/* <Image src={imgSrc} width={width} height={height} /> */}
                        {title}
                    </a>
                </Link>
            </RotateInOut3D>
        </div>
    );
};

export default GridItem;
