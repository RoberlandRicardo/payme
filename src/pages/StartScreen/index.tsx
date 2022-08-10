import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Text } from 'react-native';
import OnBoard from '../../assets/images/onboarding-amico.svg';
import GenericPage from '../../components/GenericPage';
import { primary_color_dark, secundary_color_light } from '../../styles/colors';

function StartScreen() {

    const styles = StyleSheet.create({
        startScreen: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        lateralButtonLeft: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'flex-start',    
            padding: 12,
            backgroundColor: primary_color_dark,           
        },
        lateralButtonRight: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',      
            padding: 12,
            backgroundColor: secundary_color_light,
        },
        onboard: {
            position: 'absolute',
            top: 160,
            width: 265,
            height: 265,
        },
        text: {
            position: 'relative',
            top: 130,
            width: '80%',
            fontSize: 18,
            fontWeight: 'bold',
        },
        textBackup: {
            color: secundary_color_light,
            textAlign: 'left',
        },
        textFollow: {
            color: primary_color_dark,
            textAlign: 'right',
        }
    })

    return (
        <GenericPage style={styles.startScreen}>
            <TouchableWithoutFeedback>
                <View style={styles.lateralButtonLeft}>
                    <Text style={[styles.text, styles.textBackup]}>Possuo backup salvo na nuvem</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback >
                <View style={styles.lateralButtonRight}>
                    <Text style={[styles.text, styles.textFollow]}>Seguir para o aplicativo</Text>
                </View>
            </TouchableWithoutFeedback>
            <OnBoard style={styles.onboard} />
        </GenericPage>
    )
}

export default StartScreen;