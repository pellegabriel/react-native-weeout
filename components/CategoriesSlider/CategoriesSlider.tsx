import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CategoryCard } from './CategoryCard';
import { fakeCategories } from '../../utils/fakeData';

export const CategoriesSlider: React.FC = () => {
  return (
    <ScrollView horizontal={true} style={styles.wrapper}>
      <View style={styles.container}>
        {fakeCategories.map((category, index) => (
          <CategoryCard key={index} {...category} />
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