import React, { useState } from 'react'
import { Text, FlatList, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import { ListItem } from 'react-native-elements'

export default function TeacherDetailsScreen(props) {
    const fields = ["fullName", "email", "mobile", "address"]
    const state = props.route.params.item
    console.log(state)

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
            </KeyboardAwareScrollView>
        </View>
    )
}
