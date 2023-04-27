// import React, { useRef } from 'react';
// import { View, VirtualizedList } from 'react-native';
// import { TFakeProfile } from '../../utils/fakeData';

// type Props = {
//   data: TFakeProfile[];
//   renderItem: ({ item }: { item: TFakeProfile }) => React.ReactNode;
//   style?: Record<string, unknown>;
// };

// const VirtualizedListHack = ({ data, renderItem, style }: Props) => {
//   const listRef = useRef<null | VirtualizedList<TFakeProfile>>(null);

//   const getItemLayout = (_: unknown, index: number) => {
//     return { length: 50, offset: 50 * index, index };
//   };

//   const getItemCount = () => {
//     return data.length;
//   };

//   return (
//     <View style={[style]}>
//       <VirtualizedList
//         ref={listRef}
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         getItemCount={getItemCount}
//         getItem={(_, index) => data[index]}
//         initialNumToRender={10}
//         getItemLayout={getItemLayout}
//         windowSize={21}
//       />
//     </View>
//   );
// };

// export default VirtualizedListHack; NOSE BIEN COMO FUNCIONA ESTO, PERO  ME DICE QUE NO PUEDO TENER UN SCROLL DENTRO DE OTRO EN LA MISMA DIRECCION XQ SE ROMPE, ASI Q POR ENDE DEBERIA REEMPLAZARLO X UN VIRTUALIZEDlisthacked-
