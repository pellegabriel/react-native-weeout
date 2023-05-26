import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import  CategoryCard  from './CategoryCard';
import { useGetCategories } from '../../api/useGetCategories';

const CategoriesSlider: React.FC = () => {
  const { data, error, loading } = useGetCategories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Elegi entre distintas categorias:</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.cardsContainer}>
        {data.map((category) => (
          <CategoryCard  key={category.id} {...category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesSlider;


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