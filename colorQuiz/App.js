import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

const App = () => {
  ///////// Loader
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
  const ChangeInView = props => {
    // const fadeAnim = useRef(new Animated.Image(require('../../acets/loader1.jpg'))).current;

    const [firstLouderIsOver, setFirstLouderIsOver] = useState(false);
    const appearingAnim1 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0 to 1
    useEffect(() => {
      const animateLoader1 = Animated.timing(appearingAnim1, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      });

      animateLoader1.start(() => {
        setFirstLouderIsOver(true);
      });

      setTimeout(() => {
        setLoaderIsLoaded(true);
      }, 8000);

      return () => {
        animateLoader1.stop();
      };
    }, []);

    return (
      <View
        style={{
          position: 'relative',
          flex: 1,
          //backgroundColor: '#000',
          position: 'relative',
        }}>
        <Animated.Image
          source={require('./assets/bgrLoader.jpg')} // Special animatable View
          style={{
            ...props.style,
            opacity: appearingAnim1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            //backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center', // Bind opacity to animated value
          }}
        />
        <Animated.View
          style={{
            opacity: appearingAnim1,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 200,
            left: 60,
          }}>
          <Animated.Image
            source={require('./assets/png/32.png')}
            style={{width: 160, height: 140}}
          />
          <Animated.Image
            source={require('./assets/png/Questions.png')}
            style={{}}
          />
          <Animated.Image
            source={require('./assets/png/from.png')}
            style={{}}
          />
          {/** <Animated.Image
            source={require('./assets/png/red.png')}
            style={{width: 250, height: 160}}
          />*/}
          <Animated.Text
            style={{
              color: 'red',
              fontSize: 120,
              //fontWeight: 'bold',
              fontFamily: 'Gaegu-Bold',
            }}>
            Red
          </Animated.Text>
          <Animated.Image source={require('./assets/png/to.png')} style={{}} />
          <Animated.Text
            style={{
              color: 'violet',
              fontSize: 120,
              //fontWeight: 'bold',
              fontFamily: 'Gaegu-Bold',
            }}>
            Violet
          </Animated.Text>
        </Animated.View>
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
