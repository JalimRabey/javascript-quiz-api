import Head from 'components/Head';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import Footer from 'components/Footer';

const DefaultLayout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-backgroundColor-800">
    <Head />

    <Header />

    <main className="flex flex-col flex-1 text-center py-6">
      <Wrapper>{children}</Wrapper>
    </main>

    <Footer />
  </div>
);

export default DefaultLayout;
