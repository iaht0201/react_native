import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './style'
import Card from './component/Card'
import { todoModel } from './model/interface'
import Form from './component/Form'

const TodoList = () => {
    const dataTodo: todoModel[] = [
        { id: 1, name: "📷" },
        { id: 2, name: "🎹" },
        { id: 3, name: "⭐" },
        { id: 4, name: "✍️" }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                {dataTodo.map((item) => {
                    return (
                        <Card key={item.id} id={item.id} name={item.name} />
                    )
                })}

            </View>

            <Form />
            {/* <Text>sdsadasd</Text> */}
        </View>
    )
}


export default TodoList