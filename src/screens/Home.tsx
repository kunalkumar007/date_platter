import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

export default function Home({navigation}) {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./../assets/empty.png')} style={styles.image} />
      <Text variant="titleLarge" style={styles.text}>
        No Service Yet!
      </Text>

      <Text variant="titleSmall" style={styles.text}>
        Yet No Service has been provided.
      </Text>
      {showMenu && (
        <FAB
          icon="menu-open"
          style={styles.menuFab}
          onPress={() => navigation.navigate('Main')}
        />
      )}
      <FAB
        icon={showMenu ? 'close' : 'plus'}
        style={styles.fab}
        onPress={() => setshowMenu(!showMenu)}
      />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: '5%',
    bottom: '5%',
  },
  image: {
    width: '100%',
    height: '250@vs',
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },
  menuFab: {
    position: 'absolute',
    margin: 16,
    bottom: '15%',
    right: '5%',
  },
});
