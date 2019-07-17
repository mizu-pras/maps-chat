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
import Form from '../components/myForm';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { dwidth: 300 };
  }

  cancelSignUp() {
      this.props.navigation.navigate('SignIn')
  }


  componentWillMount() {
    let dimention = Dimensions.get('window').width;
    this.setState({dwidth:dimention-60})
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

        <View style={{ flex: 2 }}>
          <View 
            style={[style.boxStyle, { width: this.state.dwidth }]}
            showsHorizontalScrollIndicator={false}
          >
            <Text style={{ textAlign: 'center', color: '#8e24aa', fontSize: 25 }}>
              Sign Up
            </Text>

            <View style={{ marginTop: 30 }}>
              <Form 
                placeholder="Email"
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
                  Next
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>

              <TouchableOpacity
                onPress={()=>this.cancelSignUp()}
              >
                <Text style={{ color: '#ab47bc', fontSize: 15, lineHeight: 80 }}>
                  Cancel
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
    alignSelf: 'center',
    marginTop: -50,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
  },
});

export default SignUp;
