import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {ScaledSheet} from 'react-native-size-matters';
import {keys, storage} from '../../../storage';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

export default function Location() {
  return (
    <SafeAreaView style={styles.cotnainer}>
      <Button mode="contained-tonal" style={styles.button}>
        Save as Draft
      </Button>

      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          storage.set(keys.country, selectedItem);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Country'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          storage.set(keys.state, selectedItem);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select State'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          storage.set(keys.city, selectedItem);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select city'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Buisness Details'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
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
});
