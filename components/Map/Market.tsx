import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

const MapMarker: React.FC = () => {
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

export default MapMarker;

// import React from 'react';
// // import { Event } from '../../src/models';
// import { Marker } from 'react-native-maps';

// interface IProps {
//   event: Event;
// }

// // const MapMarker = ({ event }: IProps) => {
//     const MapMarker = ({ }: IProps) => {

//   const position = JSON.parse(
//     '{ "lat": -34.91554, "lng": -57.91454 }'
//     // (event && event.map_point) || '{ "lat": -34.91554, "lng": -57.91454 }',
//   );
//   return <Marker coordinate={position} />;
// };

// export default MapMarker;