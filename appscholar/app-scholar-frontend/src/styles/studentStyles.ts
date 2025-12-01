// src/styles/studentStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 30, 
        textAlign: 'center',
        color: '#333'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555'
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        marginBottom: 20, 
        padding: 12, 
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 16
    }
});

export default styles;