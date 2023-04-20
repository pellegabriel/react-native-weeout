import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardUser, { CardProps } from './CardUser';
import { StackNavigationOptions } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { useNavigation } from 'expo-router';

const ScrollUser = (data) => {
  const navigation = useNavigation()

  const renderItem: React.FC<{ item: { id: string, name: string, date: string, image: string } }> = ({ item }) => (
    <CardUser
      id={item.id}
      title={item.name}
      subtitle={item.date}
      image={item.image}
      onPress={() => {
        navigation.navigate('CardDetail', {
          params: {
            id: item.id,
            title: item.name,
            subtitle: item.date,
            image: item.image 
          }
        }
      )}}
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
    marginBottom: 20, 
    padding: 20
  },
});

export default ScrollUser;
