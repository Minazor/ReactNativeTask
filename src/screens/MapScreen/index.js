import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View,Text, Dimensions,StyleSheet } from 'react-native';


const MapScreen= () => {
return (
   <View style={styles.container}>
    <MapView style={styles.map} initialRegion={{
        latitude: 38.562643,
        longitude: 35.142667,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 

    }}>
        <Marker coordinate={{
                    latitude: 39.925018,
                    longitude: 32.836956, 
                 
        }}>
        </Marker>
        <Marker coordinate={{
                    latitude: 37.941113,
                    longitude: 27.341944,   
        }}>
        </Marker>
        <Marker coordinate={{
                    latitude: 41.025658,
                    longitude: 28.974155,   
        }}>
        </Marker>
        <Marker coordinate={{
                    latitude: 36.938889,
                    longitude: 31.172222,   
        }}>
        </Marker>
        <Marker coordinate={{
                    latitude: 38.640388,
                    longitude: 34.846306,   
        }}>
        </Marker>
    </MapView>
   </View>
);
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default MapScreen;