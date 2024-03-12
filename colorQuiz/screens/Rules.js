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
              Color plays an important role in our lives. It surrounds us in all
              spheres of activity, from natural landscapes to architectural
              structures, from fashion to art. Color affects our emotions, mood
              and even behavior. It can be seen as a language that expresses our
              feelings and emotions. In nature, we see a variety of colors,
              starting from the brightest shades of the morning sun to the soft
              and calm shades of dusk. The color can be bright and lively, or
              warm and cozy. It can evoke joy and fun, or peace and tranquility.
              Color plays a key role in art. Artists use it to express their
              ideas and emotions. Each shade has its own meaning and can convey
              different feelings. For example, red can symbolize ardor or
              hotness, while blue - calmness and coolness. In fashion, color is
              used to create mood and impression. It helps to express our
              personality and style. Each fashion season is defined by certain
              colors that dominate the collections of famous designers. In
              interior design, color affects the atmosphere of the room. It can
              make the space bright and energetic, or warm and cozy. The choice
              of colors for walls, furniture and decor is important for creating
              a comfortable and cozy environment. In psychology, color is used
              to study human emotions and states of mind. Research shows that
              different colors can cause different reactions in people. For
              example, red can increase blood pressure and heart rate, while
              green can calm and relax. In our daily life, we often use colors
              to express our feelings and mood. For example, bright colors can
              lift our mood and make us more energetic, while muted colors can
              help us calm down and relax. In general, color is an important
              element in our lives that affects our emotions, mood and behavior.
              It adds beauty and vitality to our surroundings and helps us
              express ourselves and communicate with those around us.
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
