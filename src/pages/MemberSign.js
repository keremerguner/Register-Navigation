import React, {useState} from 'react';
import {SafeAreaView, Alert, Text, ActivityIndicator} from 'react-native';
import {NetworkInfo} from 'react-native-network-info';
import Input from '../components/Input/Input';
import Button from '../components/Button';
import {LogBox} from 'react-native';
import InputSecure from '../components/InputSecure/InputSecure';
import {CheckBox} from 'react-native-elements';
import Loading from '../components/Loading/Loading';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const MemberSign = props => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const registerUser = async event => {
    if (
      !userName ||
      !userSurname ||
      !userPhone ||
      !userMail ||
      !userPassword ||
      !checked1 ||
      !checked2
    ) {
      Alert.alert('UYARI !', 'Eksik bilgileri doldurunuz!');
      return;
    }
    setLoading(true);
    

    let userIpAddres;

    NetworkInfo.getIPV4Address().then(ipv4Address => {
      console.log(ipv4Address);

      userIpAddres = ipv4Address;
    });

    const user = {
      userName,
      userSurname,
      userPhone,
      userMail,
      userPassword,
    };
    
    event.preventDefault();

    const res = await fetch('https://gizli-demo.herokuapp.com/user/register', {
      body: JSON.stringify({
        firstName: userName,
        lastName: userSurname,
        email: userMail,
        password: userPassword,
        phoneNo: userPhone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
    if (result.isSuccess) {
      console.log('Bir hata yok');
      
      props.navigation.navigate('MemberResultScreen', {user});
      setLoading(false);
    } else {
      if (
        result.message ==
        'pq: duplicate key value violates unique constraint "users_email_key"'
      ) {
        setLoading(false);
        console.log('Bu email adresine kayitli bir kullanici vardir!');
      }
      setLoading(false);
      console.log('kullanici adi veya sifreniz hatali ' + result.message);
    }
  };
  if(loading){
    return <Loading />
    }
  return (
    <SafeAreaView style={{backgroundColor: 'ghostwhite'}}>
      <Input
        label="Üye Adı"
        placeholder="Adınızı giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Soyadınızı girin..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Maili"
        placeholder="Mailinizi giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Telefonu"
        placeholder="Telefon no giriniz..."
        onChangeText={setUserPhone}
      />
      <InputSecure
        label="Üye Şifresi"
        placeholder="Şifre giriniz..."
        onChangeText={setUserPassword}
      />
      <CheckBox
        title="Kullanici sozlesmesi"
        checked={checked1}
        onPress={() => setChecked1(!checked1)}
      />
      <CheckBox
        title="KVKK Metni"
        checked={checked2}
        onPress={() => setChecked2(!checked2)}
      />
      <Button text="Kayıt Ol" onPress={registerUser} />
    </SafeAreaView>
  );
};

export default MemberSign;
