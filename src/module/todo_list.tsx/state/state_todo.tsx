import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { todoModel } from '../model/interface'


const StateTodo = () => {
    // taskList 
    const [tasklist, setTasklist] = useState<string[]>([])
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
    const addTask = (name: string): void => {
        if (name === null) {
            alert("Vui lòng nhập công việc")
        }
        else if (tasklist.some((task: any) => task.includes(name))) {
            alert("Vui lòng không được để trống")
        }
        else {

            setTasklist([...tasklist, name]);
            console.log(tasklist);
        }
    }

    return { tasklist, addTask, isSelected, isNotSelected, selected, text, changeText }

}

export default StateTodo