import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import * as serviceWorker from "./serviceWorker";
import { ReactQueryDevtools } from 'react-query/devtools'
import theme from "./theme";

//context
import { AuthProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      // Login'e basıp tekrar products'a geldiğimizde 
      // tekrar tekrar fetch etsin istemiyorsak bu refetchOnMount yazacağız
      refetchOnWindowFocus: false,
      // Başka bir sekmeye gidip geldiğinizde tekrar fetch'i çekmesini istemiyoruz
    }
  }
})

ReactDOM.render(
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>

    <ChakraProvider>
      <AuthProvider>
       <BasketProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
       </BasketProvider>
      </AuthProvider>
    </ChakraProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

