import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Test = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = () => {
    // Xử lý khi nút được nhấn
    alert(`Text entered: ${inputText}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPA Main Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
});

export default Test;