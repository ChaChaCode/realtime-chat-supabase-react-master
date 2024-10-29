import { ChakraProvider, Box, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./context/appContext";
import { useTelegram } from "./useTelegram"; // Импортируем хук

function App() {
  const { username, setUsername, routeHash } = useAppContext();
  const { closeApp } = useTelegram(); // Используем хук

  if (routeHash) {
    if (routeHash.endsWith("&type=recovery")) {
      window.location.replace(`/login/${routeHash}`);
    }
    if (routeHash.startsWith("#error_code=404"))
      return (
        <div>
          <p>This link has expired</p>
          <a href="/" style={{ cursor: "pointer" }} variant="link">
            Back to app
          </a>
        </div>
      );
  }

  // Получаем цвет фона из параметров темы Telegram
  const themeParams = window.Telegram?.WebApp?.themeParams;
  const bgColor = themeParams?.bg_color; // Убираем значение по умолчанию

  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Box bg={bgColor}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Chat />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<p>Not found</p>} />
            </Routes>
          </Router>
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
