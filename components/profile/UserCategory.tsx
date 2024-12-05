import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AudioControls } from '../AudioControls';
import AppImagePicker from '../Camara/ImagePicker';
import { AdressInputWithMap } from '../Map/AdressInputWithMap';
import { useCreateEvent } from '../../api/events';
import  DatePicker  from '../DatePicker/DatePicker';
import uuid from 'react-native-uuid';

export type EventData = {
  categoria?: string | null
  created_by?: string | null
  description?: string | null
  event_date_end?: string | null
  event_date_start?: string | null
  event_end_time?: string | null
  event_time_end?: string | null
  event_time_start?: string | null
  id?: string;
  images?: number | null
  location?: string | null
  subtitle?: string | null
  title?: string | null
};

const EventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: uuid.v4(),
    title: '',
    image: '',
    location: '',
    subtitle: '',
    categoria: '',
    created_by: '',
    description: '',
    event_date_start: '1970-01-01 00:00:02',
    event_date_end: '1970-01-02 00:00:06',
    event_time_end: '1970-01-04 00:00:01',
    event_time_start: '1970-01-05 00:00:03',
  });
  const handleInputChange = (field: keyof EventData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={formData.categoria}
          onValueChange={(value) => handleInputChange('categoria', value)}
        >
            <Picker.Item label='Teatro' value='Teatro' />
            <Picker.Item label='Musica' value='Musica' />
            <Picker.Item label='Actividades sociales' value='sociales' />
            <Picker.Item label='Baile' value='Baile' />
            <Picker.Item label='Presentaciones' value='Presentaciones' />
            <Picker.Item label='Arte' value='Arte' />
            <Picker.Item label='Medio ambiente' value='Medio ambiente' />
            <Picker.Item label='Deportes' value='Deportes' />
            <Picker.Item label='Actividad  fisica' value='Actividad  fisica' />
            <Picker.Item label='Literatura' value='Literatura' />
            <Picker.Item label='Política' value='Política' />
            <Picker.Item label='Religion' value='Religion' />
            <Picker.Item label='Espiritualidad' value='Espiritualidad' />
            <Picker.Item label='Salud y bienestar' value='Salud y bienestar' />
            <Picker.Item label='Trabajo y negocios' value='Trabajo y negocios' />
            <Picker.Item label='Vida nocturna' value='Vida nocturna' />
        </Picker>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }, 

  picker: {
    boxSizing: 'border-box',
    borderWidth: 3,
    borderRadius: 5,
  }})


export default EventForm;
