import config from '../config.json'
import Head from "next/head";

export default function Header({ pre, full, plus }) {
    var title = "";
    if (full) {
        title = full;
    } else {
        if (pre) {
            title = pre + " | ";
        }

        if (config.sitetitle) title += config.sitetitle;

        if (plus) {
            if (config.sitetitle) title += "/";
            title += plus;
        }
    }
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            />
            {config.customcss ? 
            <link
                rel="stylesheet"
                href={config.customcss}
                type="text/css"
            /> : ""
            }
            <link rel="stylesheet" href="/style.css" type="text/css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/tomorrow.min.css"
            />

            <title>{title}</title>
        </Head>
    );
}
