import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Game = ({navigation}) => {
  const [lvlOrangeIsAnlock, setLvlOrangeIsAnlock] = useState(false);
  const [lvlYellowIsAnlock, setLvlYellowIsAnlock] = useState(false);
  const [lvlGreenIsAnlock, setLvlGreenIsAnlock] = useState(false);
  const [lvlBlueIsAnlock, setLvlBlueIsAnlock] = useState(false);
  const [lvlIndigoIsAnlock, setLvlIndigoIsAnlock] = useState(false);
  const [lvlVioletIsAnlock, setLvlVioletIsAnlock] = useState(false);
  console.log('lvlVioletIsAnlock on GameScr==>', lvlVioletIsAnlock);

  useEffect(() => {
    getDataAboutOrangeLvl();
    getDataAboutYellowLvl();
    getDataAboutYellowGreenLvl();
    getDataAboutBlueGreenLvl();
    getDataAboutIndigoGreenLvl();
    getDataAboutVioletGreenLvl();
  }, []);

  const getDataAboutOrangeLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Red');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setLvlOrangeIsAnlock(parsedData.lvlOrangeIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAboutYellowLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Orange');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvlYellowIsAnlock(parsedData.lvlYellowIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAboutYellowGreenLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Yellow');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvlGreenIsAnlock(parsedData.lvlGreenIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAboutBlueGreenLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Green');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvlBlueIsAnlock(parsedData.lvlBlueIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAboutIndigoGreenLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Blue');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvlIndigoIsAnlock(parsedData.lvlIndigoIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAboutVioletGreenLvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Indigo');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setLvlVioletIsAnlock(parsedData.lvlVioletIsAnlock);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

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
              disabled={!lvlOrangeIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Orange');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: lvlOrangeIsAnlock ? 'orange' : 'grey',
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
              disabled={!lvlYellowIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Yellow');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: !lvlYellowIsAnlock ? 'grey' : 'yellow',
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
              disabled={!lvlGreenIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Green');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: !lvlGreenIsAnlock ? 'grey' : 'green',
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
              disabled={!lvlBlueIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Blue');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: !lvlBlueIsAnlock ? 'grey' : 'blue',
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
              disabled={!lvlIndigoIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Indigo');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: !lvlIndigoIsAnlock ? 'grey' : 'indigo',
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
              disabled={!lvlVioletIsAnlock ? true : false}
              onPress={() => {
                navigation.navigate('Violet');
              }}
              style={{
                width: 300,
                height: 60,
                marginBottom: 20,
                backgroundColor: !lvlVioletIsAnlock ? 'grey' : 'violet',
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
