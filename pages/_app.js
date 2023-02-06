import Footer from "../components/client/layout/Footer";
import Navbar from "../components/client/layout/Navbar";
import { AppProvider } from "../context/context";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Private from "../components/common/Private";
import { useRouter } from "next/router";
import Analytics from "../components/Analytics";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <AppProvider>
          <SessionProvider session={session}>
            <Analytics />
            {router.pathname.split("/")[1] === "dashboard" ? (
              <Private>
                <Component {...pageProps} />
              </Private>
            ) : (
              <div className="">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </div>
            )}
          </SessionProvider>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
