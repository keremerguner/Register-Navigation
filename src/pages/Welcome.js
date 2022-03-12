import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input/Input';
import InputSecure from '../components/InputSecure/InputSecure';
import Loading from '../components/Loading/Loading';

const Welcome = props => {

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async event => {
    if (
      !userMail ||
      !userPassword
    ) {
      Alert.alert('UYARI !', 'Eksik bilgileri doldurunuz!');
      return;
    }
    setLoading(true);

    const res = await fetch('https://gizli-demo.herokuapp.com/user/login', {
      body: JSON.stringify({
        email: userMail,
        password: userPassword
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
    if (result.isSuccess) {
      console.log('bir hata yok');
      setLoading(false);
      
      props.navigation.navigate('MemberResultScreen');
    } else {
      if (
        result.message ==
        'pq: duplicate key value violates unique constraint "users_email_key"'
      ) {
        console.log('Bu email adresine kayıtlı bir kullanıcı vardır!');
      }
      setLoading(false);
      console.log('email veya sifre hatali ' + result.message);
      console.log(result);
    }

  }
  if(loading){
    return <Loading />
    }

  function goToMemberSign() {
    props.navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../assets/login-logo.png')}
        />
      </View>
      <View style={styles.body_container}>
        <Input placeholder="Mailinizi giriniz..."onChangeText={setUserMail}/>
        <InputSecure placeholder="  Şifreninizi giriniz..." onChangeText={setUserPassword}/>
        <Button text="Giriş Yap" onPress={registerUser}/>
        <Button text="Kayıt Ol" onPress={goToMemberSign} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo_container: {},
  body_container: {
    flex: 2,
    marginTop: 20,
  },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
