
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { PageType } from './types';
import Home from './pages/Home';
import Suites from './pages/Suites';
import Investment from './pages/Investment';
import Culture from './pages/Culture';

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
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </Layout>
  );
};

export default App;
