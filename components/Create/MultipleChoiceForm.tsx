import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';

interface Option {
  label: string;
  value: string;
}

const MySelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
  };

  const options: Option[] = [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' },
  ];

  return (
    <View>
      <Text>Picker Select</Text>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={options}
        placeholder={{ label: 'Seleccione una opción', value: null }}
        value={selectedOption}
      />
    </View>
  );
};

export default MySelect;








// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { CheckBox } from 'react-native-elements';

// const categories = {
//   Row: [
//     { title: 'Teatro'},
//     { title: 'Musica'},
//     { title: 'Actividades sociales'},
//     { title: 'Baile'},
//     { title: 'Presentaciones'},
//     { title: 'Arte'},
//     { title: 'Medio ambiente'},
//     { title: 'Deportes'},
//     { title: 'Actividad  fisica'},
//     { title: 'Literatura'},
//     { title: 'Política'},
//     { title: 'Religion'},
//     { title: 'Espiritualidad'},
//     { title: 'Salud y bienestar'},
//     { title: 'Trabajo y negocios' },
//     { title: 'Vida nocturna' },
//   ],
// };

// const MultipleChoiceForm = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleCategorySelection = (categoryTitle: string) => {
//     let newSelectedCategories = [...selectedCategories];

//     if (selectedCategories.includes(categoryTitle)) {
//       newSelectedCategories = newSelectedCategories.filter(
//         (category) => category !== categoryTitle
//       );
//     } else {
//       newSelectedCategories.push(categoryTitle);
//     }

//     setSelectedCategories(newSelectedCategories);
//   };

//   return (
//     <View style={styles.container}>
//               <Text style={styles.title}>Elegí las categorías para el evento</Text>
//               <View style={styles.container1}>

//     <ScrollView style={styles.container2}>

//     <View style={styles.container3}>
//       {categories.Row.map((category, index) => (
//         <CheckBox
//           key={index}
//           title={category.title}
//           checked={selectedCategories.includes(category.title)}
//           onPress={() => handleCategorySelection(category.title)}
//         />
        
//       ))}
//     </View>
    
//     </ScrollView>
    
//     </View>

//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 50,
//     backgroundColor: '#fff',
//     maxHeight: 300, 

//     marginTop: 100
//   },
//   container1: {
//     flex: 1,
//     padding: 0,
//     backgroundColor: '#fff',
//     maxHeight: 300, 
//     borderWidth: 1,
//     borderColor: 'black',
//   },   container2: {
//     flex: 1,
//     backgroundColor: '#fff',
//   }, container3: {
//     flex: 1,
//     padding: 0,
//     backgroundColor: '#fff',

//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default MultipleChoiceForm;