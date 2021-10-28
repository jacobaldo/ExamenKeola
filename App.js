

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/reducers/store/store'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View

} from 'react-native';
import MainContainer from './src/view/MainContainer';
const App = () => {


  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>

    // <View>
    //   <Text>hols</Text></View>
  );
};

const styles = StyleSheet.create({

});

export default App;
