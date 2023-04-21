import { StyleSheet } from 'react-native';
import { MainSlider } from '../../components/MainSlider/MainSlider';
import { Text, View } from '../../theme/Themed';
import { CardData } from '../../components/card/card';
import { ListOfEvents } from '../../components/ListOfEvents';
import { CategoriesSlider } from '../../components/CategoriesSlider';
import React, { useState } from 'react';
import { SearchInput } from '../../components/SearchInput';
import { CardData3 } from '../../components/card/card3';

export default function TabOneScreen() {
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const cards3: CardData3[] = [
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

  const cards: CardData[] = [
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
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <Text style={styles.title}>Eventos que estan ocurriendo ahora </Text>
     </View>

      <View style={styles.containerScroll}>
      <MainSlider cards={cards} />
      </View>
      <View style={styles.containerScroll2}>
      <CategoriesSlider cards={cards3}/>
      </View>
      <ListOfEvents cards={cards}/>
      
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
