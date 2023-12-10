import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Modal, Portal, Text, TextInput} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {ScaledSheet} from 'react-native-size-matters';
import {keys, storage} from '../../../storage';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

export default function Occassion() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.cotnainer}>
      <Button mode="contained-tonal" style={styles.button}>
        Save as Draft
      </Button>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          storage.set(keys.occassion, selectedItem);
          console.log(selectedItem, index);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Occassion'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <Text style={styles.textAlign}>
        Can't find Occassion ?{' '}
        <Text style={styles.link} onPress={showModal}>
          Add Occassion
        </Text>
      </Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          storage.set(keys.theme, selectedItem);
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown2DropdownStyle}
        defaultButtonText={'Select Theme'}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
      />
      <Text style={styles.textAlign}>
        Can't find Theme ?{' '}
        <Text style={styles.link} onPress={showModal}>
          Add Theme
        </Text>
      </Text>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
          style={styles.modalContainer}>
          <Text variant="headlineMedium">Add Occassion</Text>

          <TextInput mode="outlined" label="Enter Occassion Name" />
          <TextInput mode="outlined" multiline label="Occassion Description" />
          <TextInput mode="outlined" label="Enter Occassion Code" />
          <Button mode="contained-tonal" style={styles.save}>
            Save
          </Button>
        </Modal>
      </Portal>
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
});
