import { View, Text } from 'react-native'
import React, { useState } from 'react'


const StateTodo = () => {
    //Selected
    const [selected, setSelected] = useState<boolean>(false)
    const isSelected = (): void => {
        setSelected(true);
    }
    const isNotSelected = (): void => {
        setSelected(false);
    }

    // Form 
    const [text, onChangeText] = useState<string>()
    const changeText = (value: string): void => {
        onChangeText(value);
        console.log(value);
    }


    return { isSelected, isNotSelected, selected, text, changeText }

}

export default StateTodo