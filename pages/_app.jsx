import { LocaleContextProvider } from '@/context/LocaleContext';
import '@/styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <LocaleContextProvider>
            <Head>
                <title>Vegan Life Festival Athens 2022 | Qanibal</title>
                <meta
                    name="description"
                    content="Ιστοσελίδα για πλοήγηση στο Vegan Life Festival 2022. Powered by Qanibal."
                />

                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>

            <Component {...pageProps} />
        </LocaleContextProvider>
    );
}

export default MyApp;
