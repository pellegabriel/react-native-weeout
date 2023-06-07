import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AudioControls } from '../AudioControls';
import { useCreateEvent } from '../../api/events';
import AppImagePicker from '../Camara/ImagePicker';
import  DatePicker  from '../DatePicker/DatePicker';
import { AdressInputWithMap } from '../Map/AdressInputWithMap';
;

export type EventData = {
  categoria: string | null
  created_by: string | null
  description: string | null
  date: string | null
  id: string | number[]
  image: string | null
  location: {
    lat: number | null 
    lng: number | null
  } | null
  subtitle: string | null
  title: string | null
};

export const EventForm = ({ onEventCreatedSuccesfully, handledEventCreated }) => {
  const { createEvent } = useCreateEvent()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<EventData>({
    id: uuid.v4(),
    categoria: null,
    created_by: null,
    description: null,
    date: null,
    image: null,
    location: {
      lat: null,
      lng: null
    },
    subtitle: null,
    title: null,
  });

  const handleInputChange = (field: keyof EventData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAddressChange = (location: any) => {
    setFormData((prevData) => ({ ...prevData, location }));
  };
  
  const handleImageChange = (image: any) => {
    setFormData((prevData) => ({ ...prevData, image }));
  } 

  const handleAudioRecorded = (audio: any) => {
    setFormData((prevData) => ({ ...prevData, audio }));
  };

  const handleDateSelected = (date: any) => {
    setFormData((prevData) => ({ ...prevData, date }));
  }
  

  const handleSubmit = async () => {
    // Lógica para crear el evento
    await createEvent(formData);
    // Llamada a la función onEventCreatedSuccesfully
    onEventCreatedSuccesfully();
    handledEventCreated()
  };


  type TLabelProps = { text: string }
  const Label = ({ text }: TLabelProps) => <Text style={styles.label}>{text}:</Text>

  return (
    <>
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
            inputStyle={styles.input1}
            placeholder="Te esperamos de 5 a 8 en nuestro local..."
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputInnerContainer}
          />

          <Label text='Fecha del evento' />
          <DatePicker handleDateSelected={handleDateSelected} />

          <Label text='Elegi la categoria del evento' />
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
              <Picker.Item label='Actividad fisica' value='Actividad fisica' />
              <Picker.Item label='Literatura' value='Literatura' />
              <Picker.Item label='Política' value='Política' />
              <Picker.Item label='Religion' value='Religion' />
              <Picker.Item label='Espiritualidad' value='Espiritualidad' />
              <Picker.Item label='Salud y bienestar' value='Salud y bienestar' />
              <Picker.Item label='Trabajo y negocios' value='Trabajo y negocios' />
              <Picker.Item label='Vida nocturna' value='Vida nocturna' />
          </Picker>

          <Label text='Graba un audio contando acerca del evento' />
          <AudioControls eventId={formData.id} handleAudioRecorded={handleAudioRecorded} />

          <Label text='Subi una foto del evento' />
          <AppImagePicker eventId={formData.id} handleImageChange={handleImageChange} />
        </View>
      </ScrollView>

      <Label text='Ubicacion del evento' />
      <View style={styles.adressContainer}>
        <AdressInputWithMap onChange={handleAddressChange} location={formData.location} map_point="" />

        <TouchableOpacity
          disabled={loading}
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Crear evento</Text>
        </TouchableOpacity>

        {/* <ToastContainer /> */}
      </View>
    </>
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
    marginBottom: 0
  },
  inputInnerContainer: {
    borderBottomWidth: 0,
    backgroundColor: 'white'
  },
  inputContainer1: {
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  inputInnerContainer1: {
    borderBottomWidth: 0,

  },
  input: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#4e4e4e',
  },
  input1: {
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: '#4e4e4e',
      height: 100,
      display: 'flex',
      textAlignVertical: 'top',
    
  },
  picker: {
    paddingHorizontal: 8,
    marginBottom: 60,
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
    marginTop: 60,
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
  adressContainer: {
    marginBottom: 160
  }
});


export default EventForm;
