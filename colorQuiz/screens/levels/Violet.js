import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const answer = [
  {
    ans: 'A',
    id: 1,
  },
  {
    ans: 'B',
    id: 2,
  },
  {
    ans: 'C',
    id: 3,
  },
  {
    ans: 'D',
    id: 4,
  },
];

const Violet = ({navigation}) => {
  const handleStlectTrueAnswer = id => {
    console.log(id);
    if (id === 1) {
      Alert.alert('Congrat ');
      console.log('Congrat!!!');
      setTimeout(() => {
        navigation.navigate('Orange');
      }, 1000);
    } else {
      Alert.alert('wrong answer, please try again');
      setTimeout(() => {
        navigation.navigate('Game');
      }, 1000);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/lvlBgr.jpg')}
        style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../../assets/png/32.png')}
            style={{width: 120, height: 100}}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              marginBottom: 20,
              fontFamily: 'San Francisco',
              marginTop: 80,
            }}>
            Question?
          </Text>

          <View style={{marginTop: 150}}>
            {answer.map(i => {
              return (
                <TouchableOpacity
                  style={{
                    width: 300,
                    height: 60,
                    borderColor: '#000',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    handleStlectTrueAnswer(i.id);
                  }}
                  key={i.id}>
                  <Text style={{fontSize: 30}}>{i.ans}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
          <Image source={require('../../assets/png/Exit.png')} style={{}} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Violet;
