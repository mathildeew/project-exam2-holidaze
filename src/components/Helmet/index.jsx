import { Helmet, HelmetProvider } from "react-helmet-async";
// https://www.freecodecamp.org/news/react-helmet-examples/

export function SEOHelmet({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="/public/assets/identity/favicon.png"
        />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
