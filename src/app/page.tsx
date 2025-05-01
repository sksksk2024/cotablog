'use client';

import Header from '@/components/Header';
// const CotaLogo = lazy(() => import('../svgs/CotaLogo'));
import PageWrapper from '@/components/PageWrapper';
import Guide from '@/components/Guide';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

const Home = () => {
  return (
    <>
      <PageWrapper>
        {/* App Content */}
        <Guide />
        <Header />
        <Main />
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Home;
