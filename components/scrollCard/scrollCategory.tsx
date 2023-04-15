import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Card, { CardData } from '../card/card';

interface ScrollCardProps {
  cards: CardData[];
}

const ScrollCard3: React.FC<ScrollCardProps> = ({ cards }) => {
  return (
    <Swiper style={styles.wrapper}  showsButtons={true}>
      {cards.map((card: CardData, index: number) => (
        <View key={index} style={styles.slide}>
          <Card data={card} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
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

export default ScrollCard3;
