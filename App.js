import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Ladeia! </Text>
        <Text> Essa misera </Text>

        <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"

        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function onPressLearnMore(event) {
  console.log("Desgraça");
  //console.log(event);
  // Alert.alert(
  //   'Alert Title',
  //   'My Alert Msg',
  //   [
  //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ],
  //   { cancelable: false }
  // )
}
