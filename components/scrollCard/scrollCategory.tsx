import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card3, { CardData3 } from '../card/card3';

interface ScrollCardProps {
  cards: CardData3[];
}

const ScrollCard3: React.FC<ScrollCardProps> = ({ cards }) => {
  return (
    <ScrollView horizontal={true} style={styles.wrapper}>
      <View style={styles.container}>
        {cards.map((card: CardData3, index: number) => (
          <View key={index} style={styles.card}>
            <Card3 data={card} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    width: '16%',
    margin: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ScrollCard3;
