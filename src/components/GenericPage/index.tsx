import React, { ReactNode } from 'react';
import {View, StyleSheet} from 'react-native';
import { background_color } from '../../styles/colors';

interface Props {
    style: object,
    children: ReactNode,
}

const GenericPage: React.FC<Props> = (props) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: background_color
        },
    })

    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

export default GenericPage;