import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../assets/all.sass";
import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Venux Escorts</title>
        <meta name="description" content="Venux" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/VENUXLOGO.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/VENUXLOGO.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/VENUXLOGO.png`}
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/VENUXLOGO.pn`}
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Venux" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/VENUXLOGO.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
