import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {
        flex: 1,
    },
    itemFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },

    itemNome: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 60,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        borderRadius: 20,
        backgroundColor: '#E63950',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default estiloLista;