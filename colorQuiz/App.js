import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';

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

const Stack = createNativeStackNavigator();

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
      )}
    </NavigationContainer>
  );
};

export default App;
