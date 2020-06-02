import React, { useState } from 'react'
import 'node-libs-react-native/globals'
import { Button, Image, StyleSheet, Text, View, YellowBox } from 'react-native'
import * as fcl from '@onflow/fcl'

fcl.config().put('challenge.handshake', '<http://localhost:8701/flow/authenticate>')

export default function App() {
    const [user, setUser] = useState(null)
    const auth = async () => {
        const userData = await fcl.authenticate()
        setUser(userData)
    }

    console.log('user:', user)

    return (
        <View style={styles.container}>
            {user ? (
                <>
                    <Text style={{ fontSize: 24, marginBottom: 20 }}>Authed!</Text>
                    {/* <Text style={{ marginVertical: 10 }}>Name: {user.identity.name ?? 'null'}</Text> */}
                    <Text>Cover: </Text>
                    <Image
                        source={{ uri: user.identity.cover }}
                        style={{ width: '100%', height: 300, marginVertical: 20 }}
                    />
                    <Text>Avatar:</Text>
                    <Image
                        source={{ uri: user.identity.avatar }}
                        style={{ width: 150, height: 150, marginVertical: 20 }}
                    />

                    <Text style={{ color: user.identity.color }}>Color: {user.identity.color}</Text>
                </>
            ) : (
                <>
                    <Text>Test FCL auth:</Text>
                    <Button onPress={auth} title="Sign In/Up" />
                </>
            )}
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
