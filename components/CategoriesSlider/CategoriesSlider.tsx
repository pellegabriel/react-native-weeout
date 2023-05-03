import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { CategoryCard } from './CategoryCard';
import { fakeCategories } from '../../utils/fakeData';

export const CategoriesSlider: React.FC = () => {
  return (
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Elegi entre distintas categorias:</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.cardsContainer}>
          {fakeCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 40,
  },
  sectionTitle: {
    marginLeft: 40,
    marginBottom: 20,
  },
  cardsContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },
  
});