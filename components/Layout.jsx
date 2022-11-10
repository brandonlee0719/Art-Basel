import { useEffect, useState } from "react";

import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper" data-scroll-section>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
