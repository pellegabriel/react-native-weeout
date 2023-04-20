import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type TProfileEventsListProps = {
  data: {
    id: string;
    name: string;
    date: string;
    image: string;
  }[]
}

type TRenderItemProps = {
  item: {
    id: string;
    name: string;
    date: string;
    image: string;
  }
}

export const ProfileEventsList = ({ data }: TProfileEventsListProps) => {
  const renderItem: React.FC<TRenderItemProps> = ({
    item: { id, name, date, image },
  }) => (
    <TouchableOpacity>
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
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    width: '48%',
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