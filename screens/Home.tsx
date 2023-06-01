import { ScrollView, StyleSheet, Text, View } from "react-native"
import { MainSlider } from "../components/MainSlider";
import { CategoriesSlider } from "../components/CategoriesSlider";
import { ListOfEvents } from "../components/ListOfEvents";
import Map from '../components/Map/index'
import FloatingButton from "../components/profile/FloatingButton";

export const HomeScreen = ({ navigation }) => {

  return (<>
    <ScrollView style={styles.container}>
      {/* <MainSlider navigation={navigation} /> */}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido a Weeout</Text>

        <Text style={styles.subtitle}>
          ¡La app definitiva para los amantes de los eventos!
        </Text>
      </View>

      {/* <CategoriesSlider id={0} label={""} icon_name={""} /> */}
      <View style={styles.mapContainer}>
      <Map/>

      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.listOfEventsTitle}>
          ¡Descubre los eventos más populares!
        </Text>
      </View>

      <ListOfEvents />   
     
    </ScrollView>
          <FloatingButton/></>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff'
    },
    mapContainer:{
      width:410,
      height:340,
      padding: 30,
    },
    titleContainer: {
      marginTop: 14,
      marginBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    },
    title: {
      fontSize: 50,
      display: 'flex',
      fontWeight: 'bold',
      justifyContent:'flex-start',
    },
    subtitle: {
      fontSize: 18,
      marginTop: 20,
    },
    highlight: {
      color: '#f5694d'
    },
    title2: {
      fontSize: 25,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent:'flex-start', 
      padding: 20,
      paddingLeft: 0
    },
    search: {
      fontSize: 30,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent:'center',
      width: 340,
      marginTop: 30
    },
    listOfEventsTitle: {
      fontSize: 18,
      marginTop: 20,
      // fontWeight: 'bold',
    },
});