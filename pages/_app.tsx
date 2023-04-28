import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import axios from "axios";

// axios.defaults.baseURL =
//   process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080";
// axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
