import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>The Best Dog App Ever</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <h1 className='display-1 text-center'>The Best Dog App Ever</h1>
            </header>
            {children}
        </>
    );
}