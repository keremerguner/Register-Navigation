import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button';

const MemberSign = props => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('UYARI !', 'Eksik bilgileri doldurunuz!');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };

    props.navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
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
        onChangeText={setUserAge}
      />
      <Input
        label="Üye Telefonu"
        placeholder="Telefon no giriniz..."
        onChangeText={setUserMail}
      />
      <Button text="Kayıt Ol" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
