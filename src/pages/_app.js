import "@/styles/globals.css";
import { Container } from "@/components/Section/container";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Header } from "@/components/Section/header";
import { TalkStateProvider } from "@/lib/TalkStateContext";
export default function App({ Component, pageProps }) {


  return (
    <>
      <Header />
        <TalkStateProvider>
          <ThemeProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ThemeProvider>
        </TalkStateProvider>
    </>
  )
}
