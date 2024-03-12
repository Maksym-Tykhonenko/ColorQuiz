import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Game = ({navigation}) => {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        backgroundColor: '#000',
      }}>
      <ImageBackground source={require('../assets/Bgr.jpg')} style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../assets/png/32.png')}
            style={{width: 120, height: 100}}
          />
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ScrollView style={{marginTop: 50}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Red');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'red',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'red',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  //fontFamily: 'Gaegu-Bold',
                  fontFamily: 'Chewy-Regular',
                }}>
                red
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Orange');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'orange',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'orange',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                orange
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Yellow');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'yellow',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'yellow',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                yellow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Green');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'green',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'green',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                green
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Blue');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'blue',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'blue',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                blue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Indigo');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'indigo',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'indigo',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                indigo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Violet');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: 'violet',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'violet',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.9,
                shadowRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Chewy-Regular',
                }}>
                violet
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 10,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../assets/png/Exit.png')} style={{}} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Game;
