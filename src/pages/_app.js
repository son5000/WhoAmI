import "@/styles/globals.css";
import { Container } from "@/components/container";
import { ThemaProvider } from "@/lib/ThemeContext";
import { Header } from "@/components/header";

export default function App({ Component, pageProps }) {

  return (
    <>
    <Header />
    <ThemaProvider>
      <Container>
        <Component {...pageProps} />;
      </Container>
    </ThemaProvider>
    </>
  )
}
