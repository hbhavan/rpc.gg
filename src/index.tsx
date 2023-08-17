import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { theme } from './theme'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
if(rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element 'root' not found")
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
