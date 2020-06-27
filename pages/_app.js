import 'bootstrap/dist/css/bootstrap.min.css'
import React     from 'react'
import Head      from 'next/head'

// Necessary for Bootstap implementation
const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
                rel="stylesheet"
                key="google-font-poppins"
                />
            </Head>
            <Component {...pageProps} />
            <style jsx global>{`
                body {
                    font-family: 'Poppins', sans-serif;
                }               
    
            `}</style>
        </div>

        
    )
}

export default MyApp