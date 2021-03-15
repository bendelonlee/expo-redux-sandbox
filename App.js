import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './FriendsReducer';

const store = createStore(friendsReducer);

function MiddleComponent(props){
  return (
    <>
    {props.children}
    </>
  )
}

function FriendCount(props){
  return <Text>You have { props.friends.current.length } friends </Text>
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

const ConnectedFriendCount = connect(mapStateToProps)(FriendCount);


function App(props) {
  return (
    <View style={styles.container}>
      <MiddleComponent>
        <MiddleComponent>
          <MiddleComponent>
            <MiddleComponent>
              <MiddleComponent>
                <ConnectedFriendCount/>
              </MiddleComponent>
            </MiddleComponent>
          </MiddleComponent>
        </MiddleComponent>
      </MiddleComponent>
    </View>
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



export default function WrappedApp(){
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
