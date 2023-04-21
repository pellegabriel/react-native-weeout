import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Card, { CardData } from '../card/card';
import { Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface ScrollCardProps {
  cards: CardData[];
}
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }
export const MainSlider: React.FC<ScrollCardProps> = ({ cards },{ navigation }) => {
  return (
  // <NavigationContainer>
    <Swiper style={styles.wrapper}  showsButtons={true}>
      {cards.map((card: CardData, index: number) => (
        <View key={index} style={styles.slide}>
          <Card data={card} />
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            />
        </View>
      ))}
    </Swiper>
        
        // <Stack.Navigator initialRouteName="Home">
        //   <Stack.Screen name="Details" component={DetailsScreen} />
        // </Stack.Navigator>
      // </NavigationContainer>
  );
};


// const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});