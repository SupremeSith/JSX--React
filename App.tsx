import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>


      <Image
          source={{ uri: 'https://www.precisaocortelaser.com.br/wp-content/uploads/2020/07/logo-senai-1.png' }}
          style={styles.logo}
          
        />
        <TextInput
        placeholder="Bem-Vindo(a)!"
        placeholderTextColor="#FFFFFF"
        textAlign='center'
      />
        
      </View>


      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        

        <View>
      <Text style={styles.text}>Não possui conta?  {"\n"} Cadastre-se</Text>
      
    </View>
      </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },

  text: {
    color: 'blue', 
    fontSize: 16,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});



export default LandingPage;

