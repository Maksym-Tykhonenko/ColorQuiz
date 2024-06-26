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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Indigo = ({navigation}) => {
  const questions = [
    {
      question:
        'Which ocean is known for its deep, dark blue waters and is the largest and deepest ocean on Earth?',
      options: [
        'Indian Ocean',
        'Atlantic Ocean',
        'Pacific Ocean',
        'Arctic Ocean',
      ],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question:
        'Which celestial object appears as a dark blue dot in photographs taken from space and is often referred to as the "Pale Blue Dot"?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Earth',
    },
    {
      question: `What is the name of the dark blue pigment historically derived from powdered lapis lazuli and used by Renaissance painters?`,
      options: ['Cobalt Blue', 'Ultramarine', 'Sky Blue', 'Navy Blue'],
      correctAnswer: 'Ultramarine',
    },
    {
      question:
        'Which flower is known for its deep, dark blue petals and is often associated with symbolizing mystery and elegance?',
      options: ['Daisy', 'Lily', 'Iris', 'Rose'],
      correctAnswer: 'Iris',
    },
    // Додайте інші питання тут
  ];
  const [timer, setTimer] = useState(32);
  const [isRuning, setIsRuning] = useState(false);
  console.log('isRuning==>', isRuning);
  //('Gaegu-Bold');4
  //('Gaegu-Light');
  //('Gaegu-Regular');
  //('Chewy-Regular');1

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [lvlVioletIsAnlock, setLvlVioletIsAnlock] = useState(false);
  console.log('lvlVioletIsAnlock==>', lvlVioletIsAnlock);

  //////////// AsyncStorage
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [lvlVioletIsAnlock]);

  const setData = async () => {
    try {
      const data = {
        lvlVioletIsAnlock,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('Indigo', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  ///Timer
  //эфект обратного отщета времени
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRuning) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
      Alert.alert(
        'GAME OVER!!!',
        'Go back and try again',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('LoserScreen');
            },
          },
        ],
        {cancelable: false},
      );
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, isRuning]);

  //формат времени
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  //oстановка таймера
  const handleChangeTimerRunState = () => {
    setIsRuning(!isRuning);
  };
  //////////////////////////////////////////

  const displayQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Chewy-Regular',
            marginBottom: 80,
            color: 'indigo',
            marginHorizontal: 10,
          }}>
          {question.question}
        </Text>

        <View style={{alignItems: 'center'}}>
          <ScrollView>
            {question.options.map((option, index) => (
              <TouchableOpacity
                disabled={isRuning ? false : true}
                key={index}
                onPress={() => checkAnswer(option)}>
                <Text
                  style={{
                    fontFamily: 'Gaegu-Bold',
                    fontSize: 55,
                    color: '#fff',
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={{height: 100}}></View>
          </ScrollView>
        </View>
      </View>
    );
  };

  const checkAnswer = answer => {
    const question = questions[currentQuestionIndex];
    if (answer === question.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
      Alert.alert('Correct!');
    } else {
      //Alert.alert('Incorrect answer. Try again.');
      navigation.navigate('LoserScreen');
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (correctAnswersCount === 3) {
        // Якщо всі 4 відповіді вірні
        setLvlVioletIsAnlock(true);
        setIsRuning(false);
        setTimeout(() => {
          navigation.navigate('Violet');
        }, 1000);
      } else {
        Alert.alert('Congratulations! You have completed all questions.');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/lvlBgr.jpg')}
        style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 35}}>
          <Image
            source={require('../../assets/png/32.png')}
            style={{width: 120, height: 100}}
          />
        </View>

        {/**Timer */}
        <View style={{alignItems: 'center', marginTop: 0}}>
          <View style={{flexDirection: 'row'}}>
            {isRuning ? (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  color: '#000205',
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 20, //
                  //color: 'red',
                  paddingLeft: 10,
                  paddingRight: 10,
                  //backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'Gaegu-Bold',
                    fontSize: 45,
                  }}>
                  Stop
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  color: '#000205',
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 20,
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontSize: 45,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'Gaegu-Bold',
                    fontSize: 45,
                  }}>
                  Play
                </Text>
              </TouchableOpacity>
            )}

            <Text
              style={{
                //fontSize: 40,
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 20,
                color: 'red',
                fontFamily: 'Gaegu-Bold',
                fontSize: 60,
                paddingLeft: 10,
                paddingRight: 10,
                //paddingTop: 5,
                //backgroundColor: 'rgba(0, 0, 0, 0.7)',
                height: 60,
              }}>
              {formatTime(timer)}
            </Text>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>{displayQuestion()}</View>

        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
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

export default Indigo;
