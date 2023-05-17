// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {faYinYang } from '@fortawesome/free-solid-svg-icons';
// import { faWrench } from '@fortawesome/free-solid-svg-icons';
// import { ColorValue } from 'react-native';

// const SearchBar: React.FC = () => {
//   const [searchText, setSearchText] = useState('');

//   const handleInputChange = (newText: string) => {
//     setSearchText(newText);
//   };

//   return (
//     <View style={styles.box}>
//       <TextInput
//         value={searchText}
//         onChangeText={handleInputChange}
//         placeholder="Search"
//         placeholderTextColor="#ffd52d"
//         style={styles.input}
//       />
//       <FontAwesomeIcon icon={faWrench} style={styles.icon} color="#ffd52d" />
//       <FontAwesomeIcon icon={faYinYang} style={styles.youtubeIcon} color="#ff1717" />
//     </View>
//   );
// };

// interface Styles {
//   box: any;
//   input: any;
//   icon: any;
//   youtubeIcon: any;
// }

// const styles = StyleSheet.create<Styles>({
//   box: {
//     position: 'relative',
//   },
//   input: {
//     padding: 10,
//     width: 80,
//     height: 80,
//     backgroundColor: 'transparent',
//     borderWidth: 4,
//     borderColor: '#ffd52d',
//     borderRadius: 50,
//     fontFamily: 'Comic Sans MS',
//     fontSize: 26,
//     color: '#ffd52d',
//     outline: 'none',
//     transitionDuration: 0.5,
//   },
//   icon: {
//     position: 'absolute',
//     top: '50%',
//     right: 40,
//     transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
//     fontSize: 26,
//     transitionDuration: 0.2,
//   },
//   youtubeIcon: {
//     position: 'absolute',
//     top: '50%',
//     right: 15,
//     transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
//     fontSize: 26,
//     transitionDuration: 0.2,
//   },
// });

// export default SearchBar;
