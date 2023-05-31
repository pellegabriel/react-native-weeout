import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import CategoryCard from './CategoryCard';
import { useGetCategories } from '../../api/useGetCategories';

type CategoryCardProps = {
  id: number
  label: string
  icon_name: string
}

export const CategoriesSlider: React.FC<CategoryCardProps> = () => {
  const { data, error, loading } = useGetCategories();
  const [categoriesSelected, setCategoriesSelected] = useState([])
  //mandar en este estado lo seleccionado por props mediante el navigate a otra route

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handlePress = (id) => {
    const categoryIndex = categoriesSelected.indexOf(id);

    if (categoryIndex !== -1) {
      // Si la categoría ya está seleccionada, la eliminamos
      const updatedCategories = [...categoriesSelected];
      updatedCategories.splice(categoryIndex, 1);
      setCategoriesSelected(updatedCategories);
    } else {
      // Si la categoría no está seleccionada, la agregamos
      setCategoriesSelected([...categoriesSelected, id]);
    }
  }

  const isCategorySelected = (id) => categoriesSelected.some(categoryId => categoryId === id)

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>
        Elige entre distintas categorías:
      </Text>
      
      {loading && <Text>loading...</Text>}

      <ScrollView
        horizontal
        contentContainerStyle={styles.cardsContainer}
      >
        {data && data.map((item) => (          
          <CategoryCard
            {...item}
            key={item.id}
            handlePress={() => handlePress(item.id)}
            isSelected={isCategorySelected(item.id)}
          />
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

