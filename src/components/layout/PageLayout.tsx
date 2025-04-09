import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
