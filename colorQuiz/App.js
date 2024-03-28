import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';

import HomeScreen from './screens/HomeScreen';
import Game from './screens/Game';
import Rules from './screens/Rules';

import Red from './screens/levels/Red';
import Orange from './screens/levels/Orange';
import Yellow from './screens/levels/Yellow';
import Green from './screens/levels/Green';
import Blue from './screens/levels/Blue';
import Indigo from './screens/levels/Indigo';
import Violet from './screens/levels/Violet';
import WinScreen from './screens/WinScreen';
import LoserScreen from './screens/LoserScreen';

import Product from './screens/Product';

const Stack = createNativeStackNavigator();

const App = () => {
  const [route, setRoute] = useState();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  ///////////// Отримання IDFA
  const [idfa, setIdfa] = useState(null);
  console.log('idfa==>', idfa);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa]);

  const setData = async () => {
    try {
      const data = {
        idfa,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
      } else {
        await fetchIdfa();
        await someFunction();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        setIdfa(true);
      }
    } catch (err) {
      console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  //OneSignall
  // 96bacbff-4663-44d5-9857-7e4a1215746e
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const someFunction = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в someFunction==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('96bacbff-4663-44d5-9857-7e4a1215746e');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  //OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  ///////// Loader
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
  const ChangeInView = props => {
    // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;

    const [firstLouderIsOver, setFirstLouderIsOver] = useState(false);
    const appearingAnim1 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0 to 1
    useEffect(() => {
      const animateLoader1 = Animated.timing(appearingAnim1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      });

      animateLoader1.start(() => {
        setFirstLouderIsOver(true);
      });

      return () => {
        animateLoader1.stop();
      };
    }, []);

    const appearingAnim2 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 1 to 0
    useEffect(() => {
      if (firstLouderIsOver) {
        Animated.timing(appearingAnim2, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => {
          setTimeout(() => {
            setLoaderIsLoaded(true);
          }, 2000);
        });
      }
    }, [firstLouderIsOver]);

    return (
      <View style={{position: 'relative', flex: 1}}>
        <Animated.Image
          source={require('./assets/bgr2.jpg')} // Special animatable View
          style={{
            ...props.style,
            opacity: appearingAnim1,
            width: windowWidth,
            height: windowHeight,
            position: 'absolute', // Bind opacity to animated value
          }}
        />
        {firstLouderIsOver && (
          <Animated.Image
            source={require('./assets/bgr1.jpg')} // Special animatable View
            style={{
              opacity: appearingAnim2,
              width: windowWidth,
              height: windowHeight,
              position: 'absolute', // Bind opacity to animated value
            }}
          />
        )}
      </View>
    );
  };

  const Routes = ({isFath}) => {
    if (isFath) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{idfa: idfa}}
            name="Product"
            component={Product}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Game"
          component={Game}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Rules"
          component={Rules}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Red"
          component={Red}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Orange"
          component={Orange}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Yellow"
          component={Yellow}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Green"
          component={Green}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Blue"
          component={Blue}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Indigo"
          component={Indigo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Violet"
          component={Violet}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="WinScreen"
          component={WinScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoserScreen"
          component={LoserScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  //////////// useEffect що виріш який шлях включати
  useEffect(() => {
    const checkUrl = `https://marvelous-cool-win.space/MwypYSRx`;
    const targetData = new Date('2024-03-29T12:00:00'); //дата з якої поч працювати prod
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);
  return (
    <NavigationContainer>
      {!loaderIsLoaded ? (
        <ChangeInView
          style={{
            width: '100%',
            //height: 50,
            backgroundColor: 'powderblue',
          }}></ChangeInView>
      ) : (
        <Routes isFath={route} />
      )}
    </NavigationContainer>
  );
};

export default App;
