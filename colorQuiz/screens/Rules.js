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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Rules = ({navigation}) => {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <ImageBackground source={require('../assets/Bgr.jpg')} style={{flex: 1}}>
        <ScrollView style={{marginTop: 30}}>
          <View
            style={{
              backgroundColor: 'rgba(128, 128, 128, 0.4)',
              margin: 10,
              padding: 10,
              borderRadius: 15,
            }}>
            <Text style={{color: 'yellow', fontSize: 20}}>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  Rules of the game "Rainbow colors":
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  1. Goal of the game:
                </Text>
                <Text style={{fontSize: 27, color: '#fff'}}>
                  Answer as many questions as possible about the colors of the
                  rainbow within the time limit.
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  2. Game Levels:
                </Text>
                <Text style={{fontSize: 27, color: '#fff', marginBottom: 20}}>
                  The game consists of seven levels, each dedicated to one of
                  the colors of the rainbow.
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  3. Number of questions:
                </Text>
                <Text style={{fontSize: 27, color: '#fff'}}>
                  Each level has 4 to 5 questions about the corresponding color
                  of the rainbow.{' '}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  4. Limited Time:
                </Text>
                <Text style={{fontSize: 27, color: '#fff'}}>
                  Players are given 32 seconds per level. After the time limit,
                  no more responses are accepted.{' '}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  5. Questions:
                </Text>
                <Text style={{fontSize: 27, color: '#fff', marginBottom: 20}}>
                  Each question has 4 answer options and only 1 is correct. The
                  questions are related to the color of the rainbow.
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 27, color: '#fff', fontWeight: 'bold'}}>
                  Rainbow Colors Game is a fun and challenging quiz that allows
                  players to test their knowledge of colors and the rainbow.
                </Text>
              </View>
            </Text>
            <View style={{height: 100}}></View>
          </View>
        </ScrollView>

        {/**GO BACK BTN */}
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

export default Rules;
