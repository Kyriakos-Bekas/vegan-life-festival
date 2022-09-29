import EmailInput from '@/components/EmailInput/EmailInput';
import Product from '@/components/Product/Product';
import SocialLink from '@/components/SocialLink/SocialLink';
import { text } from '@/data/data';
import { exhibitors } from '@/data/exhibitors';
import { useLocaleContext } from '@/hooks/useLocaleContext';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
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

/*
 * In order to display the right (dynamic) banners, delete static lines
 */

const PersonalPage = ({ slug }) => {
    const { locale } = useLocaleContext();
    const exhibitor = text[locale].exhibitors.list.find(
        (exhibitor) => exhibitor.slug === slug
    );

    return (
        <BasicLayout>
            <div className={style.page}>
                <Head>
                    <title>{`Vegan Life Festival | ${exhibitor.name}`}</title>
                </Head>

                <header>
                    <img
                        className={style.banner}
                        // src={`/banners/${exhibitor.name}-banner.png`}
                        src={`/banners/ipethros-banner.png`}
                        alt={`${exhibitor.name} Banner`}
                    />
                </header>

                <article className={`container ${style.body}`}>
                    <p></p>

                    <section className={`text-dark ${style.bio}`}>
                        <p className={style.specifics}>
                            {exhibitor.sponsor && (
                                <span className={style.sponsor}>Sponsor</span>
                            )}
                            <span className={style.number}>{`${
                                locale === 'gr' ? 'Περίπτερο' : 'Bench'
                            } ${exhibitor.number}`}</span>
                        </p>
                        <div className={style.head}>
                            <h1 className="fs-800">{exhibitor.name}</h1>

                            {exhibitor.webAddress && (
                                <Link href={exhibitor.webAddress}>
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
                            <h2 className="fs-600 text-dark">{`Best-sellers ${
                                locale === 'gr' ? 'Προϊόντα' : 'Products'
                            }`}</h2>

                            <ul>
                                {exhibitor.products.map((product, index) => (
                                    <li key={index}>
                                        <Product
                                            title={product.title}
                                            description={product.description}
                                            img={product.img}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className={style['social-links']}>
                        <h2 className="fs-600 text-dark">
                            {locale === 'gr' ? 'Κάνε μας follow' : 'Follow us'}
                        </h2>

                        <ul>
                            {exhibitor.links.map((link) => (
                                <li key={link.type}>
                                    <SocialLink {...link} />
                                </li>
                            ))}
                        </ul>
                    </section>

                    {exhibitor.email && (
                        <section className={style['email-field']}>
                            <h2 className="fs-500 text-dark">
                                {locale === 'gr'
                                    ? 'Εγγραφείτε στο newsletter για να λάβετε τον κατάλογό μας'
                                    : 'Join our newsletter to receive our catalog and exclusive offers'}
                            </h2>

                            <EmailInput
                                destination={exhibitor.email}
                                slug={slug}
                            />
                        </section>
                    )}
                </article>
            </div>
        </BasicLayout>
    );
};

export default PersonalPage;
