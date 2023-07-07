import { View, Text, TextInput, Button, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../style'
import StateTodo from '../state/state_todo'

const Form = (props: any) => {
    const { onAddTask, itemFocus, onEditTask } = props;
    const [text, onChangeText] = useState<string>()
    const handleAddTask = () => {
        onAddTask(text)
        onChangeText("")
        Keyboard.dismiss();
    }
    const handleEditTask = () => {
        onChangeText(itemFocus)
        onEditTask(text)

    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={10} behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.addTask}>
            <TextInput
                placeholder='Hãy viết gì đó...'
                style={styles.input}
                onChangeText={(e) => {
                    onChangeText(e)
                }}
                value={text}
            />
            <TouchableOpacity onPress={() => itemFocus === null ? handleAddTask() : handleEditTask()}>
                <View style={styles.iconWrapper} >
                    <Text style={styles.icon}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )
}

export default Form