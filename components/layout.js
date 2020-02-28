import Header from './header/header';
import Navigation from './header/navigation';
import Footer from './footer';

export default ({ children }) => {
  return (
    <div className="flex flex-col text-center">
      <Navigation />
      <Header />
      <div className="container mx-auto px-16">{children}</div>
      <Footer />
    </div>
  );
};
