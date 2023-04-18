import React from "react";
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import Footer from "./components/Footer/Footer";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <FeatureSection />
        <ArticleSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
