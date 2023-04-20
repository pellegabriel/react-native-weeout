import { RouteProp } from '@react-navigation/native';
import  CardData  from '../components/ProfileEventCard';

export type RootStackParamList = {
    CardDetail: { data: typeof CardData };
};

export type CardDetailScreenRouteProp = RouteProp<RootStackParamList, 'CardDetail'>;
 