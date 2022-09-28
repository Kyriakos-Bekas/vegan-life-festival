import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Qanibal</title>

                <meta name="description" content="Qanibal" />
            </Head>

            <div className="container">
                {/* <header>
                    <img src="/vercel.svg" alt="Qanibal Logo" />
                </header> */}

                <main>
                    <h1>Qanibal EN</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure tempora tenetur, recusandae officia porro rem saepe
                        enim ea architecto, harum vero maxime ab aliquid.
                    </p>
                </main>
            </div>
        </>
    );
};

export default Home;
