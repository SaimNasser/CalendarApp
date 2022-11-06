import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form'
import { height } from 'react-native-dimension'
import DPicker from "react-native-document-picker";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FileViewer from "react-native-file-viewer";

interface DocUri {
  name: string | null,
  uri: string | null
}
export default function CreateEventScreen({ navigation, route }) {
  const { handleSubmit, control, formState: { errors } } = useForm()
  const [docUri, setDocUri] = useState<DocUri | null>(null)
  const onCreatePress = (data) => {
    // console.log(data);
    // console.log(1);
  }
  const getDocument = async () => {
    const { uri, name } = await DPicker.pickSingle({})
    setDocUri({
      name,
      uri
    })
  }
  const onViewDoc = () => docUri?.uri && FileViewer.open(docUri.uri, { showAppsSuggestions: true })
  const onDeleteDoc = () => setDocUri(null)
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'
      headerUnScrollable={() =>
        <Header
          onLeftPress={() => navigation.goBack()}
          title={'Create Event'}
          shadow={true}
        />}>
      <View style={styles.mainViewContainer} >
        <Input
          label={'Name'}
          placeholder={'Enter name...'}
          placeholderTextColor={AppColors.gray}
          rules={{ required: 'Please enter username' }}
          control={control}
        />
        <Input
          label={'Description'}
          control={control}
          multiline
          containerStyle={{ marginTop: height(1.5) }}
          numberOfLines={10}
          placeholder={'Enter name...'}
          placeholderTextColor={AppColors.gray}
        />
        {docUri ?
          <View style={styles.docViewContainer}>
            <Text numberOfLines={1} style={styles.docName}>{docUri.name}</Text>
            <TouchableOpacity onPress={onViewDoc} style={styles.icon}>
              <AntDesign
                name={'eye'}
                color={AppColors.black}
                size={height(2.5)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteDoc} style={styles.icon}>
              <Entypo
                name={'trash'}
                color={AppColors.black}
                size={height(2)} />
            </TouchableOpacity>
          </View>
          :
          <TouchableOpacity onPress={getDocument} style={styles.docContainer}>
            <AntDesign
              name={'pluscircleo'}
              color={AppColors.black}
              size={height(2)} />
            <Text style={styles.attachText}>Attach Document</Text>
          </TouchableOpacity>}
        <Button onPress={handleSubmit(onCreatePress)} title={'Create Event'} containerStyle={styles.createBtn} />
      </View>
    </ScreenWrapper>
  );
}
