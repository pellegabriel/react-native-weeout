import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

const DetailMarker: React.FC = () => {
  const position = { latitude: -34.91554, longitude: -57.91454 };
  const title = 'Lugar predeterminado';
  const description = 'Descripción del lugar predeterminado';

  return (
    <Marker coordinate={position}>
      <Callout>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default DetailMarker;