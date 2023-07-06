import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import exampleViewModel from './src/module/layout/state/ExampleViewModel';

import { PropsWithChildren } from 'react';
import layoutState from './src/module/layout/state/LayoutState';
import { PreviewLayoutProps } from './src/module/layout/model/interface';
import PreviewLayout from './src/module/layout';

import { styles } from './src/style/style';
import TodoList from './src/module/todo_list.tsx';

export default function App() {

  const { count, _decrement, _increment } = exampleViewModel();
  const { flexDirection, selectedValue } = layoutState()
  return (
    // <PreviewLayout
    //   label="flexDirection"
    //   values={['column', 'row', 'row-reverse', 'column-reverse']}
    //   selectedValue={flexDirection}
    //   setSelectedValue={selectedValue}>
    //   <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
    //   <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
    //   <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    // </PreviewLayout>
    TodoList()

  );
}


// function ExampleButton(props: any) {
//   const { onPress, text } = props;
//   return (
//     <TouchableOpacity onPress={onPress} accessible={true}
//       accessibilityLabel="Go back"
//       accessibilityHint="Navigates to the previous screen">
//       <Text>
//         {text}
//       </Text>
//     </TouchableOpacity>
//   )
// }




