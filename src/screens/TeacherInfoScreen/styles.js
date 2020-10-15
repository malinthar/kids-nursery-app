import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    imgback: {
        height: 200,
        width: 360,
        alignSelf: "center",
        paddingTop: 140,
        alignItems: "center"
    },
    imgback2: {
        height: 900,
        width: 360,
        alignSelf: "center",
        alignItems: "center"
    },
    imgtext: {
        fontSize: 40,
        color: 'rgba(0, 0, 0, 1)',
        fontWeight: "bold",
        backgroundColor: 'white',
        opacity: 0.5

    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        width: 150,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    },
    buttonD: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'transparent',
        width: 300,
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"

    },
    buttonTextD: {
        color: '#333333',
        fontSize: 16,
        fontWeight: "bold"

    },
    listContainer: {
        marginTop: 20,
        padding: 20,
        width: 300
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    searchBar: {
        width: 300
    }
})
