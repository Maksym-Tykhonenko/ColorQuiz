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

const Violet = ({navigation}) => {
  const questions = [
    {
      question: `What is the name of Prince's famous rock song with the color purple in its title?`,
      options: [
        'Violet Haze',
        'Violet Rain',
        'Violet Man-Eater',
        'Paint it black',
      ],
      correctAnswer: 'Violet Rain',
    },
    {
      question:
        'Which flower is commonly associated with the color purple and is often used as a symbol of royalty and admiration?',
      options: ['Tulip', 'Rose', 'Lily', 'Orchid'],
      correctAnswer: 'Orchid',
    },
    {
      question:
        'What is the name of the dye that is historically extracted from the mucous glands of some species of molluscs and used to obtain a purple color?',
      options: ['Indigo', 'Purple', 'Tyrian purple', 'Beta-carotene'],
      correctAnswer: 'Tyrian purple',
    },
    {
      question: 'Mixing which colors will give the color purple?',
      options: ['Red-blue', 'Green-yellow', 'Red-black', 'Orange-white'],
      correctAnswer: 'Red-blue',
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
            color: 'violet',
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
        setTimeout(() => {
          navigation.navigate('WinScreen');
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
          onPress={() => navigation.navigate('WinScreen')}
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
