import 'bootstrap/dist/css/bootstrap.min.css'


//  Necessary for bootstap to work w/ Next.js

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp