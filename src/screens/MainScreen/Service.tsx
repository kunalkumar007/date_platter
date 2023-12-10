import React, {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {
  Asset,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Button, TextInput} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {keys, storage} from '../../../storage';

export default function Service() {
  const [image, setimage] = useState<Asset>();

  const uploadImage = async () => {
    const {assets} = await launchImageLibrary({mediaType: 'photo'});
    console.log(assets);
    if (assets) {
      storage.set(keys.image, JSON.stringify(assets[0]));
      setimage(assets[0]);
    }
  };

  return (
    <SafeAreaView style={styles.cotnainer}>
      <Button mode="contained-tonal" style={styles.button}>
        Save as Draft
      </Button>
      <TextInput
        mode="outlined"
        label="Service Title"
        onChangeText={txt => storage.set(keys.service_title, txt)}
      />
      <TextInput
        mode="outlined"
        label="Service Tagline"
        onChangeText={txt => storage.set(keys.service_tagline, txt)}
      />
      <TextInput mode="outlined" label="Selling Points" />
      <TextInput
        mode="outlined"
        label="Service Description"
        onChangeText={txt => storage.set(keys.desc, txt)}
      />
      <TextInput mode="outlined" label="Feature List" />
      <Button
        mode="contained-tonal"
        icon="plus"
        style={styles.uploadButton}
        onPress={uploadImage}>
        Upload Images
      </Button>
      <Image source={{uri: image?.uri}} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  cotnainer: {
    flex: 1,
  },
  button: {
    width: '100%',
    marginVertical: '5%',
  },
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    borderColor: '#444',
    marginVertical: '2%',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
  subtext: {
    flex: 2,
  },
  switch: {
    flex: 1,
  },
  subBox: {
    flexDirection: 'row',
  },
  link: {
    color: 'blue',
  },
  textAlign: {
    textAlign: 'right',
    marginBottom: '2%',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
  },
  save: {
    marginTop: '5%',
  },
  uploadButton: {
    marginTop: '5%',
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});
