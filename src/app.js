import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header>Tech Stack</Header>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
