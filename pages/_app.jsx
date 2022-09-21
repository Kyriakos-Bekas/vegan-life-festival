import { LocaleContextProvider } from '@/context/LocaleContext';
import '@/styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <LocaleContextProvider>
            <Head>
                <title>Vegan Life Festival | Qanibal</title>
                <meta
                    name="description"
                    content="Ιστοσελίδα για πλοήγηση στο Vegan Life Festival 2022. Powered by Qanibal."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />
        </LocaleContextProvider>
    );
}

export default MyApp;
