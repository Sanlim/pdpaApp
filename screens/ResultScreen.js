import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
    const { chkTrueCount, chkTrueCount_2 } = route.params;

    const result = () => {
        if (chkTrueCount_2 == 0) {
            if (chkTrueCount == 0) {
                return (
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue' }} >ไม่สามารถประเมินผลได้ กรุณากรอกข้อมูล</Text>
                );
            }
            else {
                return (
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                            จากผลการประเมินพบว่า
                        </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue' }} >
                            ท่านไม่มีความเสี่ยงในการเป็นโรคแพนิค
                        </Text>
                    </View>
                );
            }
        }
        else if (chkTrueCount_2 >= 1) {
            if (chkTrueCount >= 4) {
                return (
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                            จากผลการประเมินพบว่า
                    </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }} >
                            ท่านมีความเสี่ยงในการเป็นโรคแพนิค ควรปรึกษาแพทย์
                        </Text>
                    </View>

                );
            }
            else {
                return (
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                            จากผลการประเมินพบว่า
                        </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue' }} >
                            ท่านไม่มีความเสี่ยงในการเป็นโรคแพนิค
                        </Text>
                    </View>
                );
            }

        }
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                {/*<Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue' }}>
                    {result}
                </Text>*/}
                {result()}
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("GeneralUser")}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>หน้าแรก</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        padding: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 120,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '65%'
    },
});

export default ResultScreen;