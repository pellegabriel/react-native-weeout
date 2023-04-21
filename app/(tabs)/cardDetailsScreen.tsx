import { StackNavigationProp } from "@react-navigation/stack";
import { Button, View, Text } from "react-native";
import { RootStackParamList } from "../../navigation/config";

type CardDetailsScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'CardDetail'>;
  };
  
  export const CardDetailsScreen: React.FC<CardDetailsScreenProps> = ({ navigation }) => {
    return (
      <View>
        <Text>Detalles de la tarjeta</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  