import React from 'react';
import { ScrollView } from 'react-native';
import MySelect from '../components/Create/MultipleChoiceForm';

const EventCreate = () => {
  return (

    <ScrollView>
    <MySelect/>
    </ScrollView>
    
    
  );
};

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

export default EventCreate;