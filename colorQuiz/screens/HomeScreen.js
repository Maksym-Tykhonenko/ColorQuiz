import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <ImageBackground source={require('../assets/Bgr.jpg')} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Image
              source={require('../assets/png/32.png')}
              style={{width: 180, height: 150}}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -150,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Game');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                width: 300,
                height: 120,
                backgroundColor: '#df121c',
                borderRadius: 50,
                borderWidth: 5,
                borderColor: '#fff',
                shadowColor: '#721536',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
              }}>
              <Image source={require('../assets/png/Game.png')} style={{}} />
            </TouchableOpacity>
            {/** <Text style={{color: '#fff', fontSize: 30}}>GAME</Text>*/}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Rules');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                width: 300,
                height: 120,
                backgroundColor: '#df121c',
                borderRadius: 50,
                borderWidth: 5,
                borderColor: '#fff',
                shadowColor: '#721536',
                shadowOffset: {width: 0, height: 18},
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
              }}>
              <Image source={require('../assets/png/Rules.png')} style={{}} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
