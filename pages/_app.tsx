import "tailwindcss/tailwind.css";
import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import { TransactionProvider } from "../src/context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <div id="toast"></div>
      <TransactionProvider>
        <NavbarPage />

        <Component {...pageProps} />
      </TransactionProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
