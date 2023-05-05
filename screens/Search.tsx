import { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Input } from "react-native-elements";
import { fakeCategories, fakeImages } from '../utils/fakeData';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '..//App';

export const SearchScreen = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [data, setData] = useState(fakeCategories)
    const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

    const SearchCategory = ({ title, id }) => {
        const [isSelected, setIsSelected] = useState(false)

        const handleClick = () => {
            const dataCopy = [...data]
            const index = dataCopy.findIndex(categoria => categoria.id === id);
            const categoriaSeleccionada = dataCopy.splice(index, 1)[0];
            dataCopy.unshift(categoriaSeleccionada);
            
            setData(dataCopy)
            setSelectedCategories(id)
            console.log(isSelected)
        }


        return (
            <TouchableOpacity style={styles.category} onPress={handleClick} >
                <Text style={isSelected ? styles.categoryTextSelected : styles.categoryText}>
                   {title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Encuentra el evento perfecto para ti</Text>

            <Input
                inputStyle={styles.input}
                placeholder="Correr en el bosque..."
                containerStyle={styles.inputContainer}
                inputContainerStyle={styles.inputInnerContainer}
            />

            <ScrollView horizontal style={styles.categoriesList}>
                {data.map((category) => (
                    <SearchCategory {...category} />
                ))}
            </ScrollView>

            <View style={styles.listOfImages}>
                {fakeImages.map(({ uri, id }) => (
                    <TouchableOpacity
                    style={styles.imageContainer}
                    // onPress={() => navigate('ImageDetails', { imageId: id })}
                    >
                    <Image source={{ uri }} style={styles.image} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 100,
      display: 'flex',
      backgroundColor: '#fff'
    },
    title: {
      paddingHorizontal: 40,
      fontSize: 40,
      display: 'flex',
      marginBottom: 40,
      fontWeight: 'bold',
      justifyContent:'flex-start',
    },
    inputContainer: {
        paddingHorizontal: 40,
    },
    inputInnerContainer: {
        borderBottomWidth: 0,
    },
    input: {
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#4e4e4e',
    },
    categoriesList: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      marginBottom: 20
    },
    category: {
        marginRight: 16
    },
    categoryText: {
        fontSize: 20,
        display: 'flex',
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    categoryTextSelected: {
        all: 'inset',
        fontSize: 20,
        display: 'flex',
        color: '#4e4e4e',  
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    listOfImages: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      imageContainer: {
        marginVertical: 10,
        marginHorizontal: 10
      },
      image: {
        width: 160,
        height: 160,
        borderRadius: 5,
      },
});