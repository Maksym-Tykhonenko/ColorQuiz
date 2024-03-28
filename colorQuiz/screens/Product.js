import React, {useRef, useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Product = ({navigation, route}) => {
  const [idfa, setIdfa] = useState(route.params?.idfa);
  console.log('idfaProductScreen==>', idfa);

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
      await AsyncStorage.setItem('ProductScreen', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('ProductScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setIdfa(parsedData.idfa);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const product = `https://marvelous-cool-win.space/C2WY8x5g?advertising_id=${idfa}`;
  const refWebview = useRef(null);

  //ф-ція для повернення назад
  const goBackBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.goBack();
    }
  };

  //ф-ція для оновлення сторінки
  const reloadPageBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.reload();
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191d24'}}>
      <WebView
        originWhitelist={[
          '*',
          'http://*',
          'https://*',
          'intent://*',
          'tel:*',
          'mailto:*',
        ]}
        onShouldStartLoadWithRequest={event => {
          const {url} = event;
          console.log('Click==>', url);
          if (url.startsWith('mailto:')) {
            Linking.openURL(url);
            return false;
          } else if (
            url.startsWith('https://m.facebook.com/') ||
            url.startsWith('https://www.facebook.com/') ||
            url.startsWith('https://www.instagram.com/') ||
            url.startsWith('https://twitter.com/') ||
            url.startsWith('https://www.whatsapp.com/')
          ) {
            return false;
          } else if (
            url.includes('bitcoin') ||
            url.includes('litecoin') ||
            url.includes('dogecoin') ||
            url.includes('tether') ||
            url.includes('ethereum') ||
            url.includes('bitcoincash')
          ) {
            return false;
          } else {
            return true;
          }
        }}
        onNavigationStateChange={navState => {
          const {url} = navState;
          //console.log('Navigation State Change:', url);
          console.log('NavigationState==>:', navState);
          //this.canGoBack = navState.canGoBack;
        }}
        textZoom={100}
        allowsBackForwardNavigationGestures={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        source={{uri: product}}
        allowsInlineMediaPlayback={true}
        setSupportMultipleWindows={false}
        mediaPlaybackRequiresUserAction={false}
        allowFileAccess={true}
        javaScriptCanOpenWindowsAutomatically={true}
        style={{flex: 1, marginBottom: 7}}
        ref={refWebview}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: -10,
        }}>
        <TouchableOpacity
          style={{marginLeft: 40}}
          onPress={() => {
            goBackBtn();
          }}>
          <AntDesign name="left" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginRight: 40}}
          onPress={() => {
            reloadPageBtn();
          }}>
          <AntDesign name="reload1" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Product;
