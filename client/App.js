import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function App() {

  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleScannerButtonPress = () => {
    setIsScannerOpen(!isScannerOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleScannerButtonPress}>
        <Text>Open QR Scanner</Text>
      </TouchableOpacity>

      {isScannerOpen && (
        <RNCamera
          style={styles.camera}
          onBarCodeRead={(event) => {
            console.log(event.data);
          }}
        />
      )}
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
  camera: {
    height: 200,
    width: 200,
  },
});
