import  MultipleSelect  from 'react-native-multiple-select';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const Multiple = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const pickerItems = [
        { id: 'Teatro',label: 'Teatro'},
        { id: 'Musica',label: 'Musica'},
        { id: 'Actividades sociales',label: 'Actividades sociales'},
        { id: 'Baile',label: 'Baile'},
        { id:  'Presentaciones',label: 'Presentaciones'},
        { id: 'Arte',label: 'Arte'},
        { id: 'Medio ambiente',label: 'Medio ambiente'},
        { id: 'Deportes',label: 'Deportes'},
        { id: 'Actividad fisica',label: 'Actividad  fisica'},
        { id: 'Literatura',label: 'Literatura'},
        { id: 'Política',label: 'Política'},
        { id: 'Religion',label: 'Religion'},
        { id: 'Espiritualidad',label: 'Espiritualidad'},
        { id: 'Salud y bienestar',label: 'Salud y bienestar'},
        { id: 'Trabajo y negocios',label: 'Trabajo y negocios' },
        { id: 'Vida nocturna',label: 'Vida nocturna' },

        // Resto de las opciones del Picker
      ];
      const handleItemSelection = (selectedItems) => {
        setSelectedItems(selectedItems);
      };
    return (
        <ScrollView horizontal style={styles.container}>
        <View style={styles.container}>
        <MultipleSelect
            items={pickerItems}
            uniqueKey="id"
            onSelectedItemsChange={handleItemSelection}
            selectedItems={selectedItems}
            selectText="   Seleccionar"
            searchInputPlaceholderText="Buscar"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="label"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#CCC"
            submitButtonText="Aceptar"
            />
            </View>
        </ScrollView>

)}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    minWidth: 300,
    
  }, })