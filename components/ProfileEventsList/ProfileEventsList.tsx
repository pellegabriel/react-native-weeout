import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TFakeProfile, fakeProfiles } from '../../utils/fakeData';

export const ProfileEventsList = () => {
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const renderItem: React.FC = ({
    item: { id, name, date, image },
  }: { item: TFakeProfile }) => (
    <TouchableOpacity onPress={() => navigate('EventDetails')}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeProfiles}
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
    padding:20
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    width: 160,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
});