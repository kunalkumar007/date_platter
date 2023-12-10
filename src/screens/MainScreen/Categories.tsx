import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Text, Switch} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {ScaledSheet} from 'react-native-size-matters';
import { keys, storage } from '../../../storage';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

export default function Categories() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={styles.cotnainer}>
      <Button mode="contained-tonal" style={styles.button}>
        Save as Draft
      </Button>

      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          storage.set(keys.category, selectedItem);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Category'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          storage.set(keys.sub_category, selectedItem);
          console.log(selectedItem, index);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Sub Category'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <View style={styles.subBox}>
        <Text variant="titleMedium" style={styles.subtext}>
          Share total unit among same category Service{' '}
        </Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
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
    // borderWidth: 1,
    flex: 2,
  },
  switch: {
    flex: 1,
  },
  subBox: {
    flexDirection: 'row',
  },
});
