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
        <Animated.Image source={require('./assets/png/from.png')} style={{}} />
        <Animated.Image
          source={require('./assets/png/red.png')}
          style={{width: 220, height: 140}}
        />

        {/**  <Animated.Text
            style={{
              color: 'red',
              fontSize: 120,
              //fontWeight: 'bold',
              fontFamily: 'Gaegu-Bold',
            }}>
            Red
          </Animated.Text>*/}
        <Animated.Image
          source={require('./assets/png/to.png')}
          style={{marginTop: -20, marginBottom: 20}}
        />
        {/**
          <Animated.Text
            style={{
              color: 'violet',
              fontSize: 120,
              //fontWeight: 'bold',
              fontFamily: 'Gaegu-Bold',
            }}>
            Violet
          </Animated.Text> */}
        <Animated.Image
          source={require('./assets/png/violet.png')}
          style={{width: '100%', height: 100}}
        />
      </Animated.View>
    </View>
  );
};
