import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="https://qanibal-analytics.up.railway.app/umami.js"
                    data-website-id="b06df297-87e8-4e8f-bb2c-f4b070d49a04"
                    strategy="beforeInteractive"
                ></Script>
            </body>
        </Html>
    );
}
