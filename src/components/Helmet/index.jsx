import { Helmet, HelmetProvider } from "react-helmet-async";
// https://www.freecodecamp.org/news/react-helmet-examples/

export function SEOHelmet({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/identity/favicon.png"
        />
        <meta
          name="title"
          content="Holidaze - Discover your next holiday!"
        ></meta>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
