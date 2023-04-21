import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Card2, { CardData } from '../card/card2';

interface ScrollCardProps {
  cards: CardData[];
}

export const ListOfEvents: React.FC<ScrollCardProps> = ({ cards }) => {
  return (
    <ScrollView style={styles.container}>
      {cards.map((card: CardData, index: number) => (
        <View key={index} style={styles.cardContainer}>
          <Card2 data={card} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cardContainer: {
    marginBottom: 10,
  },
});