
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { PageType } from './types';
import Home from './pages/Home';
import Suites from './pages/Suites';
import Investment from './pages/Investment';
import Culture from './pages/Culture';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import LegalPage from './pages/Legal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <Home onNavigateToSuites={() => handlePageChange(PageType.SUITES)} />;
      case PageType.SUITES:
        return <Suites />;
      case PageType.INVESTMENT:
        return <Investment />;
      case PageType.DINING:
        return <Culture />;
      case PageType.SERVICES:
        return <Services />;
      case PageType.ABOUT:
        return <About />;
      case PageType.CONTACT:
        return <Contact />;
      case PageType.PRIVACY:
      case PageType.TERMS:
      case PageType.COOKIES:
        return <LegalPage type={currentPage} />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </Layout>
  );
};

export default App;
