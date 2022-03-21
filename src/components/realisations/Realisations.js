import Link from 'next/link';
import { Flex, Box, Text, Button, Link as A } from 'theme-ui';
import Image from 'next/image';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FaLongArrowAltRight } from 'react-icons/fa';
import GridTile2 from '../../ui/Gridtile2';
import PageTitle from '../../ui/PageTitle';
import SiteTile from './SiteTile';
import GridItem from './GridItem';

const Realisations = ({ realisations }) => {
    const responsive = useWindowSize();

    console.log(realisations);

    //TRI DES RÉALISATIONs PAR POSITION
    const nestedSort =
        (prop1, prop2 = null, direction = 'asc') =>
        (e1, e2) => {
            const a = prop2 ? e1[prop1][prop2] : e1[prop1],
                b = prop2 ? e2[prop1][prop2] : e2[prop1],
                sortOrder = direction === 'asc' ? 1 : -1;
            return a < b ? -sortOrder : a > b ? sortOrder : 0;
        };
    realisations.sort(nestedSort('fields', 'order', 'desc'));

    const data = [
        {
            id: 1,
            name: 'Loïde Guitare',
            desc: 'Site vitrine pour un créateur de guitares originales en tissu',
            image: '/projects/loide-guitare.jpg',
            link: 'https://loide-guitare.fr/',
        },
        {
            id: 2,
            name: 'Willow Tarot',
            desc: 'Site d’accompagnement à travers la taromancie.',
            link: 'https://willow-tarot.fr/',
        },
    ];

    return (
        <>
            <PageTitle title="Nos réalisations" bodyID="realisations" />
            <div className="realisations-grid">
                {realisations?.map((realisation) => (
                    <GridItem
                        key={realisation.fields.slug}
                        title={realisation.fields.title}
                        slug={realisation.fields.slug}
                        imgSrc={'https:' + realisation.fields.featured.fields.file.url}
                        width={realisation.fields.featured.fields.file.details.image.width}
                        height={realisation.fields.featured.fields.file.details.image.height}
                        coverSrc={'https:' + realisation.fields.cover.fields.file.url}
                        coverWidth={realisation.fields.cover.fields.file.details.image.width}
                        coverHeight={realisation.fields.cover.fields.file.details.image.height}
                        description={realisation.fields.description}
                        url={realisation.fields.link}
                    />
                ))}
            </div>

            {/* <section className="realisations__grid">
                <SiteTile
                    name="Loïde Guitare"
                    desc="Site vitrine pour un créateur de guitares originales en tissu"
                    image="/projects/loide-guitare.jpg"
                    link="https://loide-guitare.fr/"
                />
                <GridTile2 siteContent>
                    <Image className="op5" src="/projects/loide-guitare.jpg" width={600} height={372} />
                    <div className="realisations__grid__content">
                        <div className="realisations__grid__content__title">Loïde Guitare</div>
                        <div className="realisations__grid__content__description">{data[0].desc}</div>
                        <div className="realisations__grid__content__link">
                            <a href={data[0].link} target="blank">
                                <FaLongArrowAltRight />
                                <span>Voir le site</span>
                            </a>
                        </div>
                    </div>
                </GridTile2>
                <GridTile2 bg="url(/projects/willow-tarot.jpg)" siteContent>
                    <div className="realisations__grid__content">
                        <div className="realisations__grid__content__title">Willow Tarot</div>
                        <div className="realisations__grid__content__description">Site vitrine pour un créateur de guitares originales en tissu</div>
                        <div className="realisations__grid__content__link">
                            <a href="https://loide-guitare.fr/" target="blank">
                                <FaLongArrowAltRight />
                                <span>Voir le site</span>
                            </a>
                        </div>
                    </div>
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image className="op5" width={48} height={48} src="/img/icons/auto_awesome_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="url(/projects/peche-exotique.jpg)">
                    <Text
                        as="p"
                        sx={{
                            fontWeight: 900,
                            fontSize: [2, 3],
                            textAlign: 'center',
                            px: 3,
                            maxWidth: '200px',
                            mx: 'auto',
                            lineHeight: 1.3,
                        }}
                    >
                        Created by Graph and Co
                    </Text>
                </GridTile2>

                <GridTile2 bg="var(--color4)">
                    <Image className="op5" width={48} height={48} src="/img/icons/code_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="url(/projects/3fp.jpg)">
                    <Image className="op5" width={48} height={48} src="/img/icons/lightbulb_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Image className="op5" width={48} height={48} src="/img/icons/emoji_events_24dp.svg" />
                </GridTile2>

                <GridTile2 bg="url(/projects/boatman.jpg)">
                    <Image className="op5" width={48} height={48} src="/img/icons/phone_android_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="url(/projects/la-toscana.jpg)"></GridTile2>
                <GridTile2 bgPosition="left top" bg="url(/projects/burgerio.jpg)">
                    <Image className="op5" width={48} height={48} src="/img/icons/trending_up_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="url(/projects/fylo.jpg)">
                    <Image className="op5" width={40} height={40} src="/img/icons/thumb_up_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="var(--color1)">
                    <A
                        sx={{
                            mx: 2,
                            fontWeight: 600,
                            fontSize: ['12px', 0, 1, 3],
                            color: 'white',
                        }}
                        href="https://johnpolacek.com"
                    >
                        johnpolacek.com
                    </A>
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image className="op5" width={48} height={48} src="/img/icons/emoji_people_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="url(/projects/barber-shop.jpg)" bgPosition="left center">
                    <Image className="op5" width={48} height={48} src="/img/icons/workspace_premium_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="var(--color3)">
                    <Link href="/docs" passHref={true}>
                        <A
                            sx={{
                                textDecoration: 'none',
                                width: 'auto',
                            }}
                        >
                            <Button
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: ['auto', 'auto', 'auto', 0],
                                    mr: ['auto', 'auto', 'auto', 0],
                                    mb: 3,
                                    fontSize: [0, 1, 2],
                                    fontWeight: 600,
                                    p: 3,
                                    width: ['100px', '120px', '160px'],
                                    display: 'flex',
                                    justifyContent: 'center',
                                    background: 'rgba(0,0,0,.25)',
                                    color: 'white',
                                }}
                            >
                                <Image
                                    width="24"
                                    height="24"
                                    sx={{
                                        ml: [-2, -3, -2],
                                        mr: [2, 3, 2],
                                        width: ['18px', '24px'],
                                    }}
                                    src="/img/double-right-white.svg"
                                />
                                docs
                            </Button>
                        </A>
                    </Link>
                </GridTile2>
                <GridTile2 bg="var(--color2)">
                    <Image className="op5" width={48} height={48} src="/img/icons/grade_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="var(--color4)">
                    <Image className="op5" width={48} height={48} src="/img/icons/cloud_done_24dp.svg" />
                </GridTile2>
                <GridTile2 bg="var(--color4)">
                    <A
                        sx={{
                            mx: 2,
                            fontSize: ['12px', 0, 1],
                            fontWeight: 600,
                            color: 'rgba(0,0,0,75)',
                        }}
                        href="https://github.com/johnpolacek"
                    >
                        <Text sx={{ display: ['inline', 'none'] }} as="span">
                            on{' '}
                        </Text>
                        github
                        <Text sx={{ display: ['none', 'inline'] }} as="span">
                            .com/johnpolacek
                        </Text>
                    </A>
                </GridTile2>
                <GridTile2 bg="var(--color1)">
                    <Image className="op5" width={48} height={48} src="/img/icons/computer_24dp.svg" />
                </GridTile2>
                <GridTile2 display={['none', 'flex']} bg="var(--color2)">
                    <Image className="op5" width={48} height={48} src="/img/icons/bolt_24dp.svg" />
                </GridTile2>
            </section> */}
        </>
    );
};

export default Realisations;
