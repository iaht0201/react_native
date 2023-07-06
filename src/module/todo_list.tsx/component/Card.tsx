import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style'
import { todoModel } from '../model/interface';
import StateTodo from '../state/state_todo';

const Card = (props: todoModel) => {
    const { selected, isSelected, isNotSelected } = StateTodo()
    const { id, name } = props;
    const handlePress = (id: number): void => {
        console.log(`0${id} : ${selected}`);
        selected == true ? isNotSelected() : isSelected();
        console.log(selected);
    };
    return (
        <TouchableOpacity onPress={() => handlePress(id)}>
            <View style={styles.item}>
                <View style={[styles.number, selected === true && styles.selected]} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{id < 10 ? `0${id}` : id}</Text>
                </View>

                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card