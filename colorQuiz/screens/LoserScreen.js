import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Button,
} from 'react-native';

const LoserScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Game');
  }, 2000);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/loseBgr.jpg')}
        style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{color: '#fff', fontFamily: 'Chewy-Regular', fontSize: 45}}>
            Wrong answer
          </Text>
          <Text style={{color: '#fff', fontFamily: 'Gaegu-Bold', fontSize: 45}}>
            please try again
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Game')}
            style={{
              width: 250,
              height: 60,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: '#fff',
              borderColor: '#fff',
              marginTop: 20,
            }}>
            <Text
              style={{color: 'red', fontFamily: 'Gaegu-Bold', fontSize: 45}}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoserScreen;
