import React, { useState } from 'react'
import { Text, Alert, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { supabase } from '../../supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a WeeOut</Text>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          style={styles.input}

        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Contraseña"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Contraseña"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <Text style={styles.titleContainer}>Si aun no tienes una cuenta, escribe tu email y contraseña. Despues dale a "Registrarte"</Text>

      <View style={[styles.verticallySpaced, styles.mt20]}>
          <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button} disabled={loading} onPress={() => signInWithEmail()}
          >
          <Text style={styles.buttonText}>Inicias sesion</Text>
        </TouchableOpacity>      
        </View>
      
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button} disabled={loading} onPress={() => signUpWithEmail()}
        >
          <Text style={styles.buttonText}>Registrarte</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 30,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  button: {
    backgroundColor:  '#f5694d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,

  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,

  },
  title: {
    marginTop: 80,
    marginBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 35,

  },
  input: {
    paddingLeft: 10,

  },
})