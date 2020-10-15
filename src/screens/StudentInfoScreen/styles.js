import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: '#788eec',
        fontSize: 16,
        fontWeight: "bold"
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    // button: {
    //     height: 47,
    //     borderRadius: 5,
    //     backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //     width: 150,
    //     alignItems: "center",
    //     justifyContent: 'center',
    //     padding: 10,
    //     marginTop: 10,
    //     marginLeft: 10
    // },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"

    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})
