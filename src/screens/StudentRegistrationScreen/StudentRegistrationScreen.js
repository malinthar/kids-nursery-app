import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function StudentRegistrationScreen(props) {
    const fields = ["fullname", "nickname", "birthday", "addmission_number", "admission_date",
        "mother", "mother_mobile", "father", "father_mobile", "address", "contact_person", "contact_person_mobile"]
    const studentRef = firebase.firestore().collection('students')

    const [fullname, setFullName] = useState('')
    const [nickname, setNickName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [mother, setMother] = useState('')
    const [mother_mobile, setMotherMobile] = useState('')
    const [father, setFather] = useState('')
    const [father_mobile, setFatherMobile] = useState('')
    const [address, setAddress] = useState('')
    const [contact_person, setContactPerson] = useState('')
    const [contact_person_mobile, setContactPersonMobile] = useState('')

    let state = {
        "fullname": fullname,
        "nickname": nickname,
        "birthday": birthday,
        "mother": mother,
        "mother_mobile": mother_mobile,
        "father": father,
        "father_mobile": father_mobile,
        "address": address,
        "contact_person": contact_person,
        "contact_person_mobile": contact_person_mobile,
        "admission_number": new Date().getUTCMilliseconds(),
        "admission_date": new Date().toDateString(),
        "performance": []
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
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.jpg')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullname}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nick Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setNickName(text)}
                    value={nickname}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Birthday'
                    onChangeText={(text) => setBirthday(text)}
                    value={birthday}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Mother'
                    onChangeText={(text) => setMother(text)}
                    value={mother}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Father'
                    onChangeText={(text) => setFather(text)}
                    value={father}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Mother's telephone"
                    onChangeText={(text) => setMotherMobile(text)}
                    value={mother_mobile}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Father's telephone"
                    onChangeText={(text) => setFatherMobile(text)}
                    value={father_mobile}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Address'
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Contact person'
                    onChangeText={(text) => setContactPerson(text)}
                    value={contact_person}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Contact person's telephone"
                    onChangeText={(text) => setContactPersonMobile(text)}
                    value={contact_person_mobile}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Register new Student</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
