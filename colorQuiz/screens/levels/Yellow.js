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

const Yellow = ({navigation}) => {
  const questions = [
    {
      question:
        'Which celestial body is often depicted as yellow and is the primary source of light and heat for the Earth?',
      options: ['Moon', 'Mars', 'Sun', 'Venus'],
      correctAnswer: 'Sun',
    },
    {
      question:
        'What is the name of the famous character from "Winnie the Pooh" who loves honey and wears a yellow shirt?',
      options: ['Tigger', 'Eeyore', 'Piglet', 'Winnie Pooh'],
      correctAnswer: 'Winnie Pooh',
    },
    {
      question:
        'Which precious metal is commonly associated with the color yellow?',
      options: ['Silver', 'Gold', 'Platinum', 'Titanium'],
      correctAnswer: 'Gold',
    },
    {
      question:
        'What is the name of the yellow, oval-shaped fruit known for being a good source of vitamin C and often associated with tropical regions?',
      options: ['Banana', 'Mango', 'Pineapple', 'Lemon'],
      correctAnswer: 'Lemon',
    },
    {
      question:
        'Which famous band released the album "Yellow Submarine" in 1969?',
      options: ['Beatles', 'Rolling Stones', 'Led Zeppelin', 'Pink Floyd'],
      correctAnswer: 'Beatles',
    },

    // Додайте інші питання тут
  ];
  //('Gaegu-Bold');4
  //('Gaegu-Light');
  //('Gaegu-Regular');
  //('Chewy-Regular');1

  const [timer, setTimer] = useState(32);
  const [isRuning, setIsRuning] = useState(false);
  console.log('isRuning==>', isRuning);

  const [lvlGreenIsAnlock, setLvlGreenIsAnlock] = useState(false);
  console.log('lvlGreenIsAnlock==>', lvlGreenIsAnlock);

  //////////// AsyncStorage
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [lvlGreenIsAnlock]);

  const setData = async () => {
    try {
      const data = {
        lvlGreenIsAnlock,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('Yellow', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const displayQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Chewy-Regular',
            marginBottom: 80,
            color: 'gold',
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
      if (correctAnswersCount === 4) {
        // Якщо всі 5 відповіді вірні
        setLvlGreenIsAnlock(true);
        setIsRuning(false);
        setTimeout(() => {
          navigation.navigate('Green');
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

export default Yellow;
