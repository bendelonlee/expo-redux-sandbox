import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './FriendsReducer';

const store = createStore(friendsReducer);


export function App() {
  return (
    <Provider store={store}>

      <View style={styles.container}>
        <Text>You have { this.props.friends.current.length } </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(App);
