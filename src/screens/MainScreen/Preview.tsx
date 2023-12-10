import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {keys, storage} from '../../../storage';

const data = [
  {
    label: 'Country',
    val: storage.getString(keys.country),
  },
  {
    label: 'State',
    val: storage.getString(keys.state),
  },
  {
    label: 'City',
    val: storage.getString(keys.city),
  },
  {
    label: 'Category',
    val: storage.getString(keys.category),
  },
  {
    label: 'Sub Category',
    val: storage.getString(keys.sub_category),
  },
  {
    label: 'Occassion',
    val: storage.getString(keys.occassion),
  },
  {
    label: 'Theme',
    val: storage.getString(keys.theme),
  },
  {
    label: 'Service Title',
    val: storage.getString(keys.service_title),
  },
  {
    label: 'Service Tagline',
    val: storage.getString(keys.service_tagline),
  },
  {
    label: 'Description',
    val: storage.getString(keys.desc),
  },
];

export default function Preview() {
  const image = storage.getString(keys.image);
  const parsed_image = JSON.parse(image ?? '{}');

  return (
    <SafeAreaView style={styles.cotnainer}>
      <Button mode="contained-tonal" style={styles.button}>
        Save as Draft
      </Button>
      {data.map((item, idx) => (
        <View style={styles.textBox} key={idx}>
          <Text variant="bodyLarge" style={styles.flex1}>
            {item.label}
          </Text>
          {console.log({label: item.label, val: item.val})}
          <Text variant="bodyLarge" style={styles.flex1}>
            : {item.val}
          </Text>
        </View>
      ))}
      <Text variant="bodyLarge">Uploaded Images:</Text>
      <Image source={{uri: parsed_image?.uri}} style={styles.image} />
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
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});
