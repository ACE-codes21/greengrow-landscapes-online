
import Header from '@/components/Header';
import ServiceDirectory from '@/components/ServiceDirectory';
import Footer from '@/components/Footer';
import WhatsAppContact from '@/components/WhatsAppContact';
import ScrollToTop from '@/components/ScrollToTop';

const MarketplacePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ServiceDirectory />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppContact />
    </div>
  );
};

export default MarketplacePage;
