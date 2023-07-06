import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style'
import StateTodo from '../state/state_todo'

const Form = () => {
    const { text, changeText } = StateTodo()
    return (
        <View style={styles.addTask}>
            <TextInput
                placeholder='Hãy viết gì đó...'
                style={styles.input}
                onChangeText={(e) => {
                    changeText(e)
                }}
                value={text}
            />
            <TouchableOpacity>
                <View style={styles.iconWrapper} >
                    <Text style={styles.icon}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form