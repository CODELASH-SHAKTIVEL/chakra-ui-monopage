import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {ColorModeSwitcher} from './ColorModeSwitcher'


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher
    pos={"fixed"} 
    top ={'4'}
     right={'4'}
    />
    <App />
    
    </ChakraProvider>
  </StrictMode>
);