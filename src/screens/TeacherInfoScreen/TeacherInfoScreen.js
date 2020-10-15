import React, { useEffect, useState } from 'react'
import { Text, ScrollView, TouchableOpacity, ImageBackground, FlatList, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements'


import { ListItem } from 'react-native-elements'

export default function TeacherInfoScreen(props) {
    const fields = ["fullname", "nickname", "birthday", "admission_number", "admission_date",
        "mother", "mother_mobile", "father", "father_mobile", "address", "contact_person", "contact_person_mobile"]
    const [teachers, setTeachers] = useState([])
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const teacherRef = firebase.firestore().collection('users')
    const onTeacherLinkPress = (item) => {
        props.navigation.navigate('TeacherDetails', { 'item': item })
    }

    useEffect(() => {
        teacherRef
            .onSnapshot(
                querySnapshot => {
                    const newTeachers = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        newTeachers.push(entity)
                    });
                    setTeachers(newTeachers)
                    setData(newTeachers)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const searchFilterFunction = text => {
        setValue(text)
        const newData = teachers.filter(item => {
            const itemData = `${item.fullname}.toUpperCase()`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData(newData);
    };

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

    const renderHeader = () => {
        return (
            <SearchBar
                placeholder="Search for Teachers..."
                lightTheme
                round
                value={value}
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}
            />
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    style={styles.imgback2}
                    source={require('../../../assets/back2.jpg')}>
                    {teachers && (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <ListItem>
                                        <TouchableOpacity style={styles.buttonD} onPress={() => onTeacherLinkPress(item)}>
                                            <Text style={styles.buttonTextD}>{`${item.fullName}`}</Text>
                                        </TouchableOpacity>
                                    </ListItem>
                                )}
                                keyExtractor={item => item._id}
                                ItemSeparatorComponent={renderSeparator}
                                ListHeaderComponent={renderHeader}
                            />
                        </View>
                    )}
                </ImageBackground>
            </ScrollView>
        </View>
    )
}
