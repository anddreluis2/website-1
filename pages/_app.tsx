import type { AppProps } from 'next/app'
import 'styles/global.css'
import { Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'

const gruppo = Source_Code_Pro({
    style: ['normal'],
    subsets: ['latin'],
    weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={gruppo.className}>
            <head>
                <script
                    defer
                    async
                    src="https://tools.luckyorange.com/core/lo.js?site-id=1035f454"
                ></script>
            </head>
            <Component {...pageProps} />
        </main>
    )
}
