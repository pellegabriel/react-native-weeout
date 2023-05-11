import React from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';
import MainCard from './MainCard';
import { fakeEvents } from '../../utils/fakeData';

interface MainSliderProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}

export const MainSlider: React.FC<MainSliderProps> = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} dotStyle={{ backgroundColor: '#f5694d',  opacity: 0.3 }} activeDotStyle={{ backgroundColor: '#f5694d' }} contentContainerStyle={{  }}>
      {fakeEvents.map((event, index) => (
        <View key={index} style={styles.slide}>
          <MainCard data={event} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 340,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});