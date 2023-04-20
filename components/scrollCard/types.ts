import { RouteProp } from '@react-navigation/native';
import  CardData  from './CardUser';

export type RootStackParamList = {
    CardDetail: { data: typeof CardData };
};

export type CardDetailScreenRouteProp = RouteProp<RootStackParamList, 'CardDetail'>;
