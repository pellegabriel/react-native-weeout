import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import CategoryCard from './CategoryCard';
import { useGetCategories } from '../../api/useGetCategories';

type CategoriesSliderProps = {
  selectedCategoryId: number | null;
  handleCategoryClick: (categoryId: number) => void;
};

export const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ handleCategoryClick }) => {
  const { data, error, loading } = useGetCategories();
  const [categoriesSelected, setCategoriesSelected] = useState<number[]>([]);

  const handlePress = (id: number) => {
    const categoryIndex = categoriesSelected.indexOf(id);

    if (categoryIndex !== -1) {
      const updatedCategories = [...categoriesSelected];
      updatedCategories.splice(categoryIndex, 1);
      setCategoriesSelected(updatedCategories);
    } else {
      setCategoriesSelected([...categoriesSelected, id]);
      handleCategoryClick(id);
    }
  };

  const isCategorySelected = (id: number) => categoriesSelected.some(categoryId => categoryId === id);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>
        Elige entre distintas categorías:
      </Text>
      
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardsContainer}
      >
        {data && data.map((item) => (          
          <CategoryCard
            id={item.id}
            label={item.label}
            icon_name={item.icon_name}
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

