# imvs starter template

This is the next.js starter template I use for most of my websites at [imvs.me](https://imvs.me). I was told it's a clean template and people wanted to replicate it, so I decided to make it public and reusable. Feel free to fork this repo and use it as a starting template, or use the built-in Makefile scripts to create a copy and get started!

## Cloning This Template

To clone this template, you can do one of two things.

### `curl` Script Method

Run the following command, replacing `starter-example` with the name of the folder you want to copy this repository into:

```sh
$ curl -s https://imvs.me/copy | sh -s starter-example
```

This will have the same effect as the method below if you're using this specific template.

### Makefile Method

Create a Makefile with the following contents:

```makefile
TARGET=starter

init:
    git clone git@github.com:itsvs/starter $(TARGET)
    cd $(TARGET) && $(MAKE) init
```

Then, run `make init TARGET=starter-example`, where `starter-example` is the name of the folder you want to copy this repository into. This will clone the repository and run the included `make init` procedure. To see why this is useful, check out the next section.

**Forking Note**: If you fork this repository, the `curl` script will use _my default_ repository. To use your fork instead, use the Makefile method and replace `git@github.com:itsvs/starter` with the URL for your fork.

## Using This Template

To get started with this template, check out `example-config.json`. You may want to copy this example config to `config.json` and make changes as needed.

### `config.json` Structure

The structure of the template configuration is relatively straightforward.

-   `sitetitle`: The name of the website. This will appear as the HTML `<title>` tag, as well as the name of the website in the top-left if no `homename` is specified.
-   `customcss`: URL for a custom stylesheet that may be hosted externally. The template also always imports `/style.css`, so this is really only for an external stylesheet such as the one I use across my websites for hot reloads.
-   `header`: Some details that go in the top nav bar.
    -   `homelink`: The URL that the top-left label in the nav bar will go to. If nonexistent, then the top-left label will not be marked as a link.
    -   `homename`: The label that will appear in the top-left of the nav bar. If unspecified, then `sitetitle` will be used here.
    -   `subtitle`: The label that will appear in the lower-left of the nav bar.
    -   `topnav`: An array containing the navigation items in the top-right of the nav bar. Each of these follow the following format:
        -   `title`: The label of the link.
        -   `url`: The link destination.
            `subnav`: An (optional) array containing the navigation items in the lower-right of the nav bar. These follow the same format as the `topnav` items.
-   `footer`: Some details that go in the footer bar.
    -   `copyright`: The copyright statement. If empty, only the copyright symbol will appear.
    -   `bottomnav`: An array containing the navigation items on the right side of the footer bar. This is primarily intended for social links, and these follow the same format as the `topnav` and `subnav` items.
-   `customjs`: URL for a custom script that may be hosted externally. The template also always imports `/custom.js`, so this is really only for an external script such as the one I use across my websites for hot reloads.

### Sample Page

For more information on the components we use below, check out the following section. Here's a sample page you could create using this template:

```js
import Header from "../components/head";
import Layout from "../components/layout";

export default function Index() {
    return [
        <Header />,
        <Layout>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vel erat orci. Sed felis est, placerat tempus mollis vel, mollis
                ac est. Curabitur non lectus nisl. Maecenas malesuada metus
                ipsum, eget rhoncus leo sagittis vitae. Vivamus sit amet
                sagittis enim. Aenean dapibus felis ultrices tortor volutpat
                laoreet. Nulla viverra sapien a erat laoreet lobortis.
                Suspendisse id lacinia elit. Nunc tristique ut enim non
                fringilla. Morbi sollicitudin cursus ornare. Donec a magna ex.
                Pellentesque ut nisl neque. Praesent placerat nec sem ut
                lobortis. Phasellus tempor convallis leo sed posuere.
            </p>

            <p>
                Fusce fermentum lacinia elit in congue. Donec pellentesque enim
                orci, in lacinia nunc gravida ut. Nulla sollicitudin ligula eget
                dictum efficitur. Nulla convallis ex id massa gravida maximus.
                Nulla sed elit diam. Proin aliquet ac diam sit amet
                pellentesque. Nullam venenatis elit sit amet tristique vehicula.
                Curabitur eleifend magna tortor, ac rutrum quam vestibulum nec.
                Donec est enim, hendrerit nec faucibus et, interdum et eros.
            </p>
            <br />
        </Layout>,
    ];
}
```

## Features

The template comes with two components: a `Header` and a `Layout`.

### `Header`

The `Header` component doesn't contain any body content, but rather extends the default next.js `Head` with stylesheets and a page title. If no parameters are passed in, the `sitetitle` from `config.json` is used. However, you may choose to wrap or override this title:

-   If the `pre` parameter is passed in, your page title will look like `pre | sitetitle`.
-   If the `plus` parameter is passed in, your page title will look like `sitetitle/plus`.
-   If both the `pre` and `plus` parameters are passed in, your page title will look like `pre | sitetitle/plus`.
-   If the `full` parameter is passed in, your page title will look like `full` and all other parameters will be ignored.

If a `customcss` is defined, it will be imported here. Also, `/style.css` will be imported regardless of whether it exists or not.

### `Layout`

The `Layout` component first renders the top nav bar, including mobile navigation as needed. This involves the following actions (all variables are in reference to `config.json`):

-   Create the mobile hamburger menu. If `header.subnav` exists, add it and a horizontal separator to the mobile hamburger. If `header.topnav` exists, add it below any existing hamburger content.
-   Create the top nav as follows.
    -   If `header.homelink` exists, create an `<a>` element pointing to it. If `header.homename` exists, use this as the `<a>` element's contents. Otherwise, if `sitetitle` exists, use that. If neither exist, then use `"home"`. If `header.homelink` doesn't exist, use the labeling process anyway except not as an `<a>` element.
    -   If `header.topnav` exists, add those elements in order, separated by `" / "`.
    -   If `header.subtitle` exists, add that label to the lower-left of the nav bar.
    -   If `header.subnav` exists, add those elements in order, separated by `" / "`.
-   Add any `children` of the React component to the body.
-   Create the footer as follows.
    -   Write the copyright symbol. If `footer.copyright` is defined, add this message after the symbol.
    -   If `footer.bottomnav` exists, add those elements in order, separated by `" / "`.

At the end, if `customjs` was defined, then this script is imported. Also, `/custom.js` will be imported regardless of whether it exists or not.

## License

Copyright (c) 2020 Vanshaj Singhania. See [LICENSE](LICENSE.md).
