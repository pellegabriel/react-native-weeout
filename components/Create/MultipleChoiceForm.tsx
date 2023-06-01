 
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useGetCategories } from '../../api/useGetCategories';

const MultipleChoiceForm = () => {
  const { data, error, loading } = useGetCategories()
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const handleCategorySelection = (categoryTitle: string) => {
    let newSelectedCategories = [...selectedCategories];

    if (selectedCategories.includes(categoryTitle)) {
      newSelectedCategories = newSelectedCategories.filter(
        (category) => category !== categoryTitle
      );
    } else {
      newSelectedCategories.push(categoryTitle);
    }

    setSelectedCategories(newSelectedCategories);
  };

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elegí las categorías para el evento</Text>

      {loading ? (
        <Text>loading...</Text>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          {data.map(({label, id}) => (
            <CheckBox
              key={id}
              title={label}
              checked={selectedCategories.includes(label)}
              onPress={() => handleCategorySelection(label)}
            />
            
          ))}
        </ScrollView>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    maxHeight: 300, 
    marginTop: 100,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    padding: 0,
    maxHeight: 300, 
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MultipleChoiceForm;