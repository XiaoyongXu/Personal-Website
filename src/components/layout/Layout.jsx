import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Navbar />
      <main className="pt-24 min-h-[calc(100vh-80px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
