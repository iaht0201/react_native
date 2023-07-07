import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style'
import StateTodo from '../state/state_todo';

const Card = (props: any) => {
    const { selected, isSelected, isNotSelected, } = StateTodo()
    const { id, name, onDeleteTask, getIndexCard } = props;
    const handlePress = (): void => {
        selected == true ? isNotSelected() : isSelected();
    };
    // const handleEditTask = (newTask: string, index: number) => {
    //     onEditTask(newTask, index)
    // }



    return (
        <View>
            <View style={{ flexDirection: "row-reverse", gap: 8, }}>
                <TouchableOpacity onPress={onDeleteTask}>
                    <Text>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { getIndexCard(id - 1) }}>
                    <Text>Sửa</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handlePress()}>
                <View style={styles.item}>
                    <View style={[styles.number, selected === true && styles.selected]} >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{id < 10 ? `0${id}` : id}</Text>
                    </View>

                    <Text>{name}</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card