import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TFakeEvent } from '../../utils/fakeData';

export interface CardProps {
  data: TFakeEvent;
}

export const EventCard: React.FC<CardProps> = ({ data }) => {
  return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    marginBottom:20
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '50%',
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 9,
  },
});