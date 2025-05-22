import { showTapToPayEducation } from 'expo-ttp-edu';
import { Button, SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [error, setError] = useState<string | null>(null);

  const handleShowEducation = async (uiMode: 'light' | 'dark') => {
    try {
      setError(null);
      await showTapToPayEducation({ uiMode });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Tap to Pay Education Example</Text>
        
        <View style={styles.group}>
          <Text style={styles.groupHeader}>Show Education Screen</Text>
          <Text style={styles.description}>
            This example demonstrates how to show the Tap to Pay education screen.
            The feature is only available on iOS 18.0 and above.
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Show in Light Mode"
              onPress={() => handleShowEducation('light')}
            />
          </View>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Show in Dark Mode"
              onPress={() => handleShowEducation('dark')}
            />
          </View>

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  errorContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffebee',
    borderRadius: 5,
  },
  errorText: {
    color: '#c62828',
    textAlign: 'center',
  },
});
