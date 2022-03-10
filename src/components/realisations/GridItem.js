import Link from 'next/link';
import Image from 'next/image';
import RotateInOut3D from '../../animation/RotateInOut3D';

const GridItem = ({ title, slug, imgSrc, width, height, description, url, coverSrc }) => {
    return (
        <RotateInOut3D className={`grid-item ${slug}`} duration={1 + Math.random()} delay={0.5 + Math.random()} offsetY={200}>
            <Link href={`realisations/${slug}`}>
                <a style={{ backgroundImage: `url(${coverSrc})` }}>
                    {/* <Image src={imgSrc} width={width} height={height} /> */}
                    <div className="grid-item-name">{title}</div>
                </a>
            </Link>
        </RotateInOut3D>
    );
};

export default GridItem;
