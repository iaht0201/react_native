import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import Card from './component/Card'
import { todoModel } from './model/interface'
import Form from './component/Form'
import StateTodo from './state/state_todo'

const TodoList = () => {
    const [taskList, setTaskList] = useState<string[]>([])
    const [indexSelected, setIndexSelected] = useState<number>(-1)
    const handleTask = (task: string): void => {

        if (task === null || task.length === 0) {
            setIndexSelected(-1)
            alert("Vui lòng nhập task")
        }
        else if (taskList.some((item: any) => item.includes(task))) {
            alert("task đã có")
        }
        else {

            setTaskList([...taskList, task])
            console.log(taskList);
        }
    }
    const handleDeleteTask = (index: number): void => {
        Alert.alert('Thông báo', 'Bạn có muốn xóa', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    let listTemp: string[] = [...taskList];
                    listTemp.splice(index, 1)
                    setTaskList(listTemp)
                },
            },])
    }
    const handleEditTask = (newtask: string): void => {
        if (newtask === null || newtask.length === 0) {
            alert("Task không thể rỗng")

        }
        else if (taskList.some((item: string, i: number) => item === newtask && i != indexSelected)) {
            alert("Task này đã tồn tại")
        }
        else {
            let updateTask = [...taskList]
            updateTask[indexSelected] = newtask
            setTaskList(updateTask)
        }
    }
    const getIndexEdit = (index: number): void => {
        setIndexSelected(index);
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <ScrollView>
                    {taskList.map((item, index) => {
                        return (
                            <Card key={index} id={index + 1} name={item} onDeleteTask={() => handleDeleteTask(index)} getIndexCard={getIndexEdit} />
                        )
                    })}
                </ScrollView>
            </View>
            <Form onAddTask={(newTask: string) => handleTask(newTask)} itemFocus={taskList[indexSelected]} onEditTask={handleEditTask} />

        </View>
    )
}


export default TodoList