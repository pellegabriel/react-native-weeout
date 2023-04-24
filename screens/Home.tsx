import { StatusBar } from "expo-status-bar"
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { SearchInput } from "../components/SearchInput";
import { MainSlider } from "../components/MainSlider";
import { CategoriesSlider } from "../components/CategoriesSlider";
import { ListOfEvents } from "../components/ListOfEvents";

export const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
      setText(newText);
    };
  
    const cards3 = [
      {
        title: 'Card 1',
        icon: 'icono'
      },
      {
        title: 'Card 2',
        icon: 'icono'
      },
      {
        title: 'Card 3',
        icon: 'icono'
      },
      {
        title: 'Card 4',
        icon: 'icono'
      },
      {
        title: 'Card 5',
        icon: 'icono'
      },
    ]
  
    const cards = [
      {
        title: 'Card 1',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 2',
        image: 'https://source.unsplash.com/random/300x301',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 3',
        image: 'https://source.unsplash.com/random/300x302',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 4',
        image: 'https://source.unsplash.com/random/300x300',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 5',
        image: 'https://source.unsplash.com/random/300x301',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
      {
        title: 'Card 6',
        image: 'https://source.unsplash.com/random/300x302',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus voluptates nihil nisi magnam ullam unde, illum repellendus commodi earum fugiat similique neque sapiente debitis molestias amet eos error culpa?',
      },
    ];
  
    return (
      <View style={styles.container}>
        <SearchInput
          value={text}
          onChangeText={handleTextChange}
          placeholder="Escribe algo..."
        />
        <View style={styles.separator}>
        <Text style={styles.title}>Eventos que estan ocurriendo ahora </Text>
       </View>
  
        <View style={styles.containerScroll}>
            <MainSlider navigation={navigation} />
        </View>

        <View style={styles.containerScroll2}>
            <CategoriesSlider />
        </View>

        <ListOfEvents />
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent:'flex-start'
    },
    containerScroll:{
      height:200
    },
    containerScroll2:{
      height:200
    },
    separator: {
      marginTop: 60,
      height: 80,
      width: '80%',
    },
  });