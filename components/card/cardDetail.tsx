import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';

type CardDetailsRouteProps = RouteProp<RootStackParamList, 'CardDetail'>;

type Props = {
  route: CardDetailsRouteProps;
};

const CardDetails = ({ route }: Props) => {
  const { id, title, subtitle, image } = route.params;

  const renderContent = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.image}>{image}</Text>
    </View>
  );

  return renderContent();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  id: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    fontSize: 14,
  },
});

export default CardDetails;
