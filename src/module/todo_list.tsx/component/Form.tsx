import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { styles } from '../style'
import StateTodo from '../state/state_todo'

const Form = () => {
    const { text, changeText } = StateTodo()
    return (
        <View style={styles.addTask}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    changeText(e)
                }}
                value={text}
            />
            <View style={styles.iconWrapper} >
                <Text style={styles.icon}>
                    +
                </Text>
            </View>
        </View>
    )
}

export default Form