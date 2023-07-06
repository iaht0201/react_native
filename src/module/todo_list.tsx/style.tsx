import { StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

export const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eff7f8'
    },
    body: {
        paddingTop: 20,
        paddingHorizontal: 18,
        flex: 1,
    },
    header: {
        fontSize: 20,
        color: '#21a3d0',
        fontWeight: 'bold'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'

    },
    number: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#DF928E',
        textAlign: 'center',
        margin: 'auto',
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',


    },
    selected: {
        backgroundColor: '#d62828',
    },
    input: {
        width: '80%',
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: '#21a3d0'
    },
    addTask: {
        flexDirection: 'row',
        // bottom: 30,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'


    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: '#21a3d0',
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ffffff'

    },
    icon: {
        color: 'white'
    }
})