# React.JS-Day5

import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './redux/store';
import DataTable from './components/DataTable';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div style={{ padding: '20px' }}>
          <h1>Data Table</h1>
          <DataTable />
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
