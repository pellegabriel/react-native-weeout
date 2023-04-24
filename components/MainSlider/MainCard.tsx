import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TFakeEvent } from '../../utils/fakeData';

export interface MainCardProps {
  data: TFakeEvent;
}

const MainCard: React.FC<MainCardProps> = ({ data }) => {
  return (
    <View style={styles.mainCard}>  
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    width: 350,
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
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
    fontSize: 12,
  },
});

export default MainCard;
