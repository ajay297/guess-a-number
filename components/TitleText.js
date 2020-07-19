import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleText = props => <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>

export default TitleText

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
})
