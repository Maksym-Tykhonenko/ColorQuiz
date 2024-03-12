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
              style={{width: 120, height: 100}}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -200,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Game');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
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
                marginTop: 20,
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
