import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, TouchableOpacity, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Table, Row, Rows } from 'react-native-table-component';
import { firebase } from '../../firebase/config'

export default function StudentPerformanceScreen(props) {
    const [addStudent, setAddStudent] = useState(false)
    const [performance, setPerformance] = useState([])
    const [data, setData] = useState([])
    const studentRef = firebase.firestore().collection('students')
    const id = props.route.params.id
    const fields = ["reading", "writing", "speaking", "motor", "reasoning", "social"]
    let i = 1

    useEffect(() => {
        firebase
            .firestore()
            .collection("students")
            .doc(id)
            .onSnapshot(snap => {
                setPerformance(snap.data().performance)
                addData()
            })
    }, [])

    const addData = () => {
        let data = []
        performance.forEach(item => {
            let temp = [i]
            fields.forEach(field => {
                temp.push(item[field])
            })
            data.push(temp)
            i++;
        })
        setData(data)
    }


    const [reading, setReading] = useState('')
    const [writing, setWriting] = useState('')
    const [speaking, setSpeaking] = useState('')
    const [motor, setMotor] = useState('')
    const [reasoning, setReasoning] = useState('')
    const [social, setSocial] = useState('')


    const state2 = {
        tableHead: ['Week', 'Reading', 'Writing', 'Speaking', 'Motor skills', 'Reasoning skills', 'Social skills'],
        tableData: data
    }
    const onRegisterPress = () => {
        studentRef
            .add(state)
            .then(_doc => {
                // setEntityText('')
                props.navigation.navigate("Home")
            })
            .catch((error) => {
                alert(error)
            });
    }

    const onFooterLinkPress = () => {
        setAddStudent(true)
    }

    const back = () => {
        setAddStudent(false)
    }

    const clearState = () => {
        setReading('')
        setReasoning('')
        setSocial('')
        setMotor('')
        setWriting('')
        setSpeaking('')
    }

    const save = () => {
        var formState = {
            "reading": reading,
            "writing": writing,
            "speaking": speaking,
            "motor": motor,
            "reasoning": reasoning,
            "social": social

        }
        firebase.firestore()
            .collection('students')
            .doc(id)
            .update(
                { performance: firebase.firestore.FieldValue.arrayUnion(formState) }
            )
        setAddStudent(false)
        //clearState()
    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.title}>Student's performance by week</Text>
                <View style={styles.container2}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state2.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={state2.tableData} textStyle={styles.text} />
                    </Table>
                </View>
                {addStudent ?
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Reading skills'
                            placeholderTextColor="#aaaaaa"
                            onChangeText={(text) => setReading(text)}
                            value={reading}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Writing skills'
                            placeholderTextColor="#aaaaaa"
                            onChangeText={(text) => setWriting(text)}
                            value={writing}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaaaaa"
                            placeholder='Speaking skills'
                            onChangeText={(text) => setSpeaking(text)}
                            value={speaking}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaaaaa"
                            placeholder='Motor skills'
                            onChangeText={(text) => setMotor(text)}
                            value={motor}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaaaaa"
                            placeholder='Reasoning skills'
                            onChangeText={(text) => setReasoning(text)}
                            value={reasoning}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaaaaa"
                            placeholder="Social skills"
                            onChangeText={(text) => setSocial(text)}
                            value={social}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <View style={styles.block}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => back()}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => save()}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onFooterLinkPress()}>
                        <Text style={styles.buttonText}>Add new week's record</Text>
                    </TouchableOpacity>
                }

            </KeyboardAwareScrollView>
        </View>
    )
}
