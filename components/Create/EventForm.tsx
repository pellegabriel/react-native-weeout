import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AudioControls } from '../AudioControls';
import AppImagePicker from '../Camara/ImagePicker';
// import { AdressInputWithMap } from '../Map/AdressInputWithMap';
import { useCreateEvent } from '../../api/events';
import  DatePicker  from '../DatePicker/DatePicker';
import uuid from 'react-native-uuid';
import { supabase } from '../../supabase';
// import { Multiple } from './Multiple';

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
  const { createEvent } = useCreateEvent()
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
//react-useId para generar un id unico 
//guardar la ubicacion el audio y la foto
  const handleInputChange = (field: keyof EventData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  
  const handleImagesChange = (images: string[]) => {
  
    console.log('Imágenes seleccionadas:', images);
  } 


  const handleSubmit = () => {
    createEvent(formData)
  }
  const handleAudioRecorded = (audioUri) => {
    // Aquí puedes realizar acciones con la URI del audio grabado
    console.log('Audio grabado:', audioUri);
    // Puedes guardar la URI en el estado del formulario u realizar otras acciones necesarias
  };
  const Label = ({ text }: { text: string}) => {
    return (
      <Text style={styles.label}>{text}:</Text>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Label text='Titulo' />
        <Input
          value={formData.title}
          onChangeText={(text) => handleInputChange('title', text)}
          inputStyle={styles.input}
          placeholder="Escalada en el cerro Otto"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Label text='Subtitulo' />
        <Input
          value={formData.subtitle}
          onChangeText={(text) => handleInputChange('subtitle', text)} 
          inputStyle={styles.input}
          placeholder="Evento para para mayores de 26"
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />
        <Label text='Description' />
        <Input
          multiline
          value={formData.description}
          onChangeText={(text) => handleInputChange('description', text)} 
          inputStyle={styles.input}
          placeholder="En este evento vamos a..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />

        <Label text='Categoría' />
        <DatePicker/>

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
        {/* <DateComponent/> */}
        <Label text='Graba un audio contando acerca del evento' />
        <AudioControls onAudioRecorded={handleAudioRecorded} />
        <Label text='Subi una foto del evento' />
        <AppImagePicker onImagesChange={handleImagesChange} />
        

        {/* <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Crear evento</Text>
        </TouchableOpacity> */}
      </View>
      {/* <Multiple/> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 10,
  }, 
  container1: {
    marginTop: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  titleHome:{
    padding:10,
    fontSize: 22,
    fontWeight: '600',
    color: '#1c1e21',
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#4b4c4f',
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputInnerContainer: {
    borderBottomWidth: 0,
  },
  input: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#4e4e4e',
  },
  picker: {
    paddingHorizontal: 8,
    marginBottom: 10,
    boxSizing: 'border-box',
    borderWidth: 3,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#1877f2',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    marginTop: 20
  },
  button: {
    backgroundColor:  '#f5694d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default EventForm;
