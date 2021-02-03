import React, { useState } from 'react';
import { StyleSheet, Text, Alert , TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListItem from '../components/ListItem';
import uuid from 'uuid-random';

const DrugRemindScreen = () => {
    const [med, setMed] = useState('');
    const [dose, setDose] = useState('');
    const [time, setTime] = useState('');

    const onChangeMed = textMed => setMed(textMed);
    const onChangeDose = textDose => setDose(textDose);
    const onChangeTime = textTime => setTime(textTime);

    const [items, setItems] = useState([]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(items => items.id != id)
        })
    }

    const addItem = (med, dose, time) => {
        if (!(med&&dose&&time)) {
            Alert.alert('Error', 'กรุณาใส่ข้อมูล', [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
                { cancelable: true });
        } else {
            setItems(prevItems => {
                return [{ id: uuid(), med, dose, time }, ...prevItems]
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>รายละเอียด</Text>

            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="ชื่อยา"
                placeholderTextColor="#666"
                onChangeText={onChangeMed}
            />
            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="ปริมาณ(กี่เม็ด)"
                placeholderTextColor="#666"
                onChangeText={onChangeDose}
            />

            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="เวลา"
                placeholderTextColor="#666"
                onChangeText={onChangeTime}
            />
            
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => addItem(med,dose,time)}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem item={item} deleteItem={deleteItem} />
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '60%'
    },
    input: {
        padding: 10,
        //flex: 1,
        fontSize: 16,
        //fontFamily:'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    }
});

export default DrugRemindScreen;