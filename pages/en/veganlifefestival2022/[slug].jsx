import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Product from '@/components/Product/Product';
import SocialLink from '@/components/SocialLink/SocialLink';
import { text } from '@/data/data';
import { exhibitors } from '@/data/exhibitors';
import PlainLayout from '@/layouts/PlainLayout/PlainLayout';
import style from '@/styles/pages/PersonalPage.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticPaths() {
    const paths = exhibitors.en
        .filter((exhibitor) => exhibitor.slug)
        .map((exhibitor) => ({
            params: { slug: exhibitor.slug },
        }));

    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const { slug } = context.params;

    return { props: { slug } };
}

const PersonalPage = ({ slug }) => {
    const exhibitor = text['en'].exhibitors.list.find(
        (exhibitor) => exhibitor.slug === slug
    );

    return (
        <PlainLayout>
            <Navigation slug={slug} />

            <div className={style.content}>
                <div className={style.page}>
                    <Head>
                        <title>{`Vegan Life Festival | ${exhibitor.name}`}</title>
                    </Head>

                    <header>
                        <img
                            className={style.banner}
                            src={`/banners/${slug}-banner.png`}
                            alt={`${exhibitor.name} Banner`}
                            style={{
                                objectFit: `${
                                    slug === 'amino-animo' ? 'cover' : 'contain'
                                }`,
                            }}
                        />
                    </header>

                    <article className={`container ${style.body}`}>
                        <p></p>

                        <section className={`text-dark ${style.bio}`}>
                            <p className={style.specifics}>
                                {exhibitor.sponsor && (
                                    <span className={style.sponsor}>
                                        Sponsor
                                    </span>
                                )}

                                <span
                                    className={style.number}
                                >{`Bench ${exhibitor.number}`}</span>
                            </p>
                            <div className={style.head}>
                                <h1 className="fs-800">{exhibitor.name}</h1>

                                {exhibitor.webAddress && (
                                    <Link
                                        href={`https://${exhibitor.webAddress}`}
                                    >
                                        <a
                                            className={style['web-address']}
                                            target="_blank"
                                        >
                                            {exhibitor.webAddress}
                                        </a>
                                    </Link>
                                )}
                            </div>

                            {exhibitor.bio.map((paragraph, index) => (
                                <p className="text-dark" key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </section>

                        {exhibitor.products && (
                            <section>
                                <h2 className="fs-600 text-dark">
                                    Best-seller Products
                                </h2>

                                <ul>
                                    {exhibitor.products.map(
                                        (product, index) => (
                                            <li key={index}>
                                                <Product
                                                    title={product.title}
                                                    description={
                                                        product.description
                                                    }
                                                    img={product.img}
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>
                        )}

                        {exhibitor.links.length > 0 && (
                            <section className={style['social-links']}>
                                <h2 className="fs-600 text-dark">Follow us</h2>

                                <ul>
                                    {exhibitor.links.map((link) => (
                                        <li key={link.type}>
                                            <SocialLink {...link} />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {exhibitor.contact && (
                            <section className={style.newsletter}>
                                <Link href={exhibitor.contact}>
                                    <a
                                        target="_blank"
                                        className={style['contact-btn']}
                                    >
                                        Join our newsletter
                                    </a>
                                </Link>
                            </section>
                        )}
                    </article>
                </div>
            </div>

            <Footer />
        </PlainLayout>
    );
};

export default PersonalPage;
