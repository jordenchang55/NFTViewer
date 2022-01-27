/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import NFTCollectionListPage from './src/pages/NFTCollectionListPage';
import store from './src/store';
import NFTCollectionPage from './src/pages/NFTCollectionPage';
import NFTDetailPage from './src/pages/NFTDetailPage';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="NFTCollectionList"
              component={NFTCollectionListPage}
              options={() => ({
                title: 'NFT Collections',
              })}
            />
            <Stack.Screen
              name="NFTCollection"
              component={NFTCollectionPage}
              options={({route}) => ({
                title: route.params.collection.collectionDict.displayName,
              })}
            />
            <Stack.Screen
              name="NFTDetail"
              component={NFTDetailPage}
              options={({route}) => ({
                title: route.params.nft.name,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
