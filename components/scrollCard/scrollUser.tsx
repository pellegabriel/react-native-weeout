import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardUser, { CardProps } from './CardUser';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CardDetail'>;
  data: { id: string, name: string, date: string, image: string }[];
}

const ScrollUser = ({ navigation, data }: Props) => {
  
  const renderItem = ({ item }: { item: { id: string, name: string, date: string, image: string } }) => (
<CardUser
  key={item.id}
  id={item.id}
  title={item.name}
  subtitle={item.date}
  image={item.image}
  onPress={() => navigation.navigate('CardDetail', { 
    data: { 
      id: item.id,
      title: item.name,
      subtitle: item.date,
      image: item.image 
    }
  })}
/>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, padding: 20
  },
});

export default ScrollUser;
