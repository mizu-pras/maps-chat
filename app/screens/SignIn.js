import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Text from '../components/myText';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = { 
      dwidth: 300 
    };
  }

  componentWillMount() {
    let dimention = Dimensions.get('window').width;
    this.setState({dwidth:dimention-60})
  }

  toSignup() {
      this.props.navigation.navigate('SignUp')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ab47bc',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/*<Text style={{ color: 'white', fontSize: 25, top: -20 }}>Hallo Bro!</Text>}
          <Text style={{ color: 'white', fontSize: 20 }}>
                      Login dulu untuk lanjut
                    </Text>*/}
        </View>

        <View style={{ flex: 3 }}>
          <View style={[style.boxStyle, { width: this.state.dwidth }]}>
            <Text style={{ textAlign: 'center', color: '#8e24aa', fontSize: 25 }}>
              WaoWao
            </Text>
            <View style={{ marginTop: 55 }}>
              <TextInput
                placeholder="Email"
                style={{
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  paddingLeft: 5,
                }}
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <TextInput
                placeholder="Password"
                style={{
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  paddingLeft: 5,
                }}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={{
                marginTop: 30,
                alignSelf: 'center',
                lineHeight: 50,
              }}
              onPress={() => alert('Login')}>
              <View
                style={{
                  width: 200,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ab47bc',
                }}>
                <Text style={{ color: 'white', fontSize: 15, lineHeight: 50 }}>
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>

              <TouchableOpacity 
                onPress={()=>this.toSignup()}
              >
                <Text style={{ color: '#ab47bc', fontSize: 15, lineHeight: 80 }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  boxStyle: {
    padding: 25,
    height: 450,
    alignSelf: 'center',
    marginTop: -50,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
  },
});

export default SignIn;
