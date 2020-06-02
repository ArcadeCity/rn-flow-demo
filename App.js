import React from 'react'
import 'node-libs-react-native/globals'
import { Button, StyleSheet, Text, View, YellowBox } from 'react-native'
import * as fcl from '@onflow/fcl'

fcl.config().put('challenge.handshake', '<http://localhost:8701/flow/authenticate>')

export default function App() {
    const auth = async () => {
        const user = await fcl.authenticate()
        console.log('Here is user:', user)
    }

    return (
        <View style={styles.container}>
            <Text>Test FCL auth:</Text>
            <Button onPress={auth} title="Sign In/Up" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

YellowBox.ignoreWarnings(['Warning: The provided value'])
