import React, { useState } from 'react'
import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import { ListItem } from 'react-native-elements'

export default function StudentInfoScreen(props) {
    const fields = ["fullname", "nickname", "birthday", "admission_number", "admission_date",
        "mother", "mother_mobile", "father", "father_mobile", "address", "contact_person", "contact_person_mobile"]
    const state = props.route.params.item
    console.log(state)

    const onFooterLinkPress = (performance) => {
        props.navigation.navigate('StudentPerformance', { 'performance': performance, 'id': state.id })
    }

    const onRegisterPress = () => {
        console.log(state)
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

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <FlatList
                    data={fields}
                    renderItem={({ item }) => (
                        <ListItem>
                            <Text style={styles.title}>{item + " : " + state[item]}</Text>
                        </ListItem>
                    )}
                    keyExtractor={item => item._id}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onFooterLinkPress(state.performance)}>
                    <Text style={styles.buttonText}>View perfromance</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
