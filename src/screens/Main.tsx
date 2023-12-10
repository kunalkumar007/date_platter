import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Stepper from 'react-native-stepper-ui';
import Categories from './MainScreen/Categories';
import Location from './MainScreen/Location';
import Occassion from './MainScreen/Occassion';
import Service from './MainScreen/Service';
import Preview from './MainScreen/Preview';

const content = [
  <Location />,
  <Categories />,
  <Occassion />,
  <Service />,
  <Preview />,
];

export default function Main() {
  const [active, setActive] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive(p => p - 1)}
          onFinish={() => console.log('hello')}
          onNext={() => setActive(p => p + 1)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    // paddingHorizontal: '12%',
  },
});
