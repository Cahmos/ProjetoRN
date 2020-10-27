import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloInicial from './estiloInicial';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

function Inicial({ navigation }) {

    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>

            <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloInicial.fundo}>
            
                <TouchableOpacity onPress={abrirPerfil}>
                    <ImageBackground source={require('../../../assets/Imagens/Logo.png')} style={estiloInicial.botaoLogo}>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirPerfil}>
                    <ImageBackground source={require('../../../assets/Imagens/Perfil.jpg')} style={estiloInicial.botaoBG}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/Imagens/Item.jpg')} style={estiloInicial.botaoBG}>
                        <Text style={estiloInicial.botaoTexto}>Pães</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Inicial;