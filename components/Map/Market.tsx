import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

interface MapMarkerProps {
  loading: boolean;
  error: string;
  data: any; // Asegúrate de especificar el tipo de dato adecuado para la propiedad 'data'
}

const MapMarker: React.FC<MapMarkerProps> = ({ loading, error, data }) => {
  if (loading) {
    // Lógica para mostrar un indicador de carga
    return null; // Otra acción alternativa si se está cargando
  }

  if (error) {
    // Lógica para mostrar un mensaje de error
    return null; // Otra acción alternativa si hay un error
  }

  // Obtén los valores de 'position', 'title' y 'description' de 'data' u otras fuentes
  const position = data?.position || { latitude: -34.91554, longitude: -57.91454 };
  const title = data?.title || 'Lugar predeterminado';
  const description = data?.description || 'Descripción del lugar predeterminado';

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