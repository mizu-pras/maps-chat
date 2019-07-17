import React from 'react';
import { View, Text } from 'react-native'

import firebase from 'react-native-firebase';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }
}