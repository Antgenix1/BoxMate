import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RNCamera } from "react-native-camera";
import styles from "./Styles";

const QRScanner = () => {
    const [scannedData, setScannedData] = useState('');

    const handleBarcodeScan = (event) => {
        setScannedData(event.data);
    };

    useEffect(() => {
        //Start
        return() => {
            //Stop
        };
    }, []);

    return(
        <View style={styles.container}>
            <RNCamera
                style={styles.camera}
                onBarCodeRead={handleBarcodeScan}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel'
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel'
                }}
            />
            {scannedData !== '' && <Text>{`Scanned data: ${scannedData}`}</Text>}
        </View>
    );

};

export default QRScanner;