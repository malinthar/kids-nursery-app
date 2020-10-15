import React, { useEffect, useState } from 'react'
import { Image, ScrollView, FlatList, Keyboard, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { SearchBar, ListItem } from 'react-native-elements'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props) {

    const [students, setStudents] = useState([])
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const studentRef = firebase.firestore().collection('students')
    const userID = props.extraData.id
    const onFooterLinkPress = () => {
        props.navigation.navigate('StudentRegistration')
    }

    const onStudentLinkPress = (item) => {
        props.navigation.navigate('StudentInfo', { 'item': item })
    }

    const onFooterLinkPressTeacher = () => {
        props.navigation.navigate('TeacherInfo')
    }


    useEffect(() => {
        studentRef
            .onSnapshot(
                querySnapshot => {
                    const newStudents = []
                    querySnapshot.forEach(doc => {
                        let entity = doc.data()
                        entity.id = doc.id
                        newStudents.push(entity)
                    });
                    setStudents(newStudents)
                    setData(newStudents)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])


    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.fullname}
                </Text>
            </View>
        )
    }

    const searchFilterFunction = text => {
        setValue(text)
        const newData = students.filter(item => {
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
                placeholder="Search for students..."
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
                    <ImageBackground
                        style={styles.imgback}
                        source={require('../../../assets/cover.jpg')}>
                        <Text style={styles.imgtext}>KIDS preschool</Text>
                    </ImageBackground>
                    <View style={styles.block}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onFooterLinkPress()}>
                            <Text style={styles.buttonText}>Add New Student</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onFooterLinkPressTeacher()}>
                            <Text style={styles.buttonText}>View Teachers</Text>
                        </TouchableOpacity>
                    </View>
                    {students && (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <ListItem>
                                        <TouchableOpacity style={styles.buttonD} onPress={() => onStudentLinkPress(item)}>
                                            <Text style={styles.buttonTextD}>{`${item.fullname}`}</Text>
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
