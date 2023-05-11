import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { TFakeEvent } from '../../utils/fakeData';

export interface MainCardProps {
  data: TFakeEvent;
}

const MainCard: React.FC<MainCardProps> = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.mainCard}>  
      <Image  source={{ uri: data.image }} style={{ width: width - 80, height: 200 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    elevation: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.27,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default MainCard;
