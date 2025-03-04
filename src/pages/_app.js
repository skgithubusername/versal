import "@/styles/globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Navbar is always displayed */}
      <Component {...pageProps} />
    </>
  );
}
