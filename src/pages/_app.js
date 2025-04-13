import "@/styles/globals.css";
import { Container } from "@/components/Section/container";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Header } from "@/components/Section/header";
import { TalkStateProvider } from "@/lib/TalkStateContext";
import { RoomStateProvider } from "@/lib/RoomStateContext";
import { BasketStateProvider } from "@/lib/BasketStateContext";
import { FolderStateProvider } from "@/lib/FolderStateContext";
export default function App({ Component, pageProps }) {


  return (
    <>
      <Header />
        <FolderStateProvider>
        <BasketStateProvider>
        <RoomStateProvider>
        <TalkStateProvider>
          <ThemeProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ThemeProvider>
        </TalkStateProvider>
        </RoomStateProvider>
        </BasketStateProvider>
        </FolderStateProvider>
    </>
  )
}
