import React, { useState } from 'react'
import 'node-libs-react-native/globals'
import { Button, Image, StatusBar, StyleSheet, Text, View, YellowBox } from 'react-native'
import * as fcl from '@onflow/fcl'
// import { SvgUri } from 'react-native-svg'

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
            <StatusBar backgroundColor="blue" barStyle="dark-content" />
            {user ? (
                <>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
                        Authed with Flow!
                    </Text>
                    <Text style={{ marginVertical: 10 }}>Provider: {user.provider.name}</Text>
                    <Text style={{ marginVertical: 10 }}>Addr: {user.provider.addr}</Text>
                    <Text style={{ marginVertical: 10 }}>Name: {user.identity.name ?? 'null'}</Text>
                    <Text style={{ marginVertical: 10, color: user.identity.color }}>
                        Color: {user.identity.color}
                    </Text>
                    <Text style={{ marginVertical: 10 }}>Cover: </Text>
                    <Image
                        source={{ uri: user.identity.cover }}
                        style={{ width: '100%', height: 300, marginVertical: 10 }}
                    />
                    {/* <Text>Avatar:</Text> */}
                    {/* This would work if it wasn't an SVG
                    <Image
                        source={{ uri: user.identity.avatar }}
                        style={{ width: 150, height: 150, marginVertical: 20 }}
                    /> */}
                    {/* And this works for most SVGs but not the default avatar from onflow.org for some reason
                    <SvgUri
                        width="150"
                        height="150"
                        uri={user.identity.avatar}
                    /> */}
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
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

YellowBox.ignoreWarnings(['Warning: The provided value'])
