import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"
// import { SearchInput } from "../components/SearchInput/SearchInput";
import { MainSlider } from "../components/MainSlider";
import { CategoriesSlider } from "../components/CategoriesSlider";
import { ListOfEvents } from "../components/ListOfEvents";
import { supabase } from "../supabase";
// import { StatusBar } from "expo-status-bar";

export const HomeScreen = ({ navigation }) => {
  // const [text, setText] = useState('');

  // const handleTextChange = (newText: string) => {
  //   setText(newText);
  // };


  const fetchEvents = async () => {
    const data = await supabase.from('events').select('title')

    console.log({data})
  }

  useEffect(() => {
    fetchEvents()  
  }, [])
  
  
  return (
    <ScrollView style={styles.container}>

      {/* <View style={styles.search}>      
        <SearchInput
          value={text}
          onChangeText={handleTextChange}
          placeholder="Escribe algo..."
        />
      </View> */}

      <MainSlider navigation={navigation} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido a Weeout</Text>

        <Text style={styles.subtitle}>
          ¡La app definitiva para los amantes de los eventos!
        </Text>
      </View>

      <CategoriesSlider />


      <View style={styles.titleContainer}>
        <Text style={styles.listOfEventsTitle}>
          ¡Descubre los eventos más populares!
        </Text>
      </View>

      <ListOfEvents />        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff'
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