import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

export default function HomeScreen({ navigation }) {
  const openApp = (url) => {
    Linking.openURL(url); // e.g., 'tel://', 'sms://', or 'app://'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName} onPress={() => openApp('tel://')}>
        Phone
      </Text>
      <Text style={styles.appName} onPress={() => openApp('sms:')}>
        Messages
      </Text>
      <Text style={styles.appName} onPress={() => openApp('mailto:')}>
     Email
    </Text>
      <Text style={styles.appName} onPress={() => openApp('geo:')}>
        Maps
      </Text>
      {/* Add more apps as needed */}
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 20,
    margin: 10,
    textDecorationLine: 'underline',
  },
});
