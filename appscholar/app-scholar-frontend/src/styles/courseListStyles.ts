import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    card: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 5, elevation: 2 },
    courseName: { fontWeight: 'bold', fontSize: 16 },
    actions: { flexDirection: 'row', gap: 10 }
});

export default styles;