import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { PreviewLayoutProps } from './model/interface';

import { styles } from './style';

const PreviewLayout = ({

  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((e) => (
        <TouchableOpacity key={e} onPress={() => setSelectedValue(e)} style={[styles.button, selectedValue === e && styles.selected]}>
          <Text style={[styles.buttonLabel, selectedValue === e && styles.selectedLabel,]}>
            {
              e
            } </Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);


export default PreviewLayout 