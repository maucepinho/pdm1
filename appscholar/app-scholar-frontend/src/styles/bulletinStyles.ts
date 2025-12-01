import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    searchContainer: { flexDirection: 'row', marginBottom: 20, gap: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
    card: { backgroundColor: '#f9f9f9', padding: 15, marginBottom: 10, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
    discipline: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    teacher: { fontSize: 14, color: '#666', marginBottom: 10 },
    gradesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
    average: { fontWeight: 'bold', color: '#007bff' },
    emptyText: { textAlign: 'center', color: '#999', marginTop: 20 }
});

export default styles;