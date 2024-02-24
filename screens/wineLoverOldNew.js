import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const WineLoverSelection = () => {
  return (
    <View style={styles.container}>
      <Button
        // onPress={() => navigation.navigate("/")}
        title="New World"
        buttonStyle={{
          backgroundColor: '#fff',
          borderColor: '#008000',
          borderWidth:  2,
          borderRadius: 5,
          height: '30%',
          }}
          type="outline"
          titleStyle={{ color: '#008000', fontWeight: 'bold', }}
          containerStyle={{
            width: '50%',
            marginVertical: 10,
          }}
      />
      <View style={styles.space} />
      <Button
        // onPress={() => navigation.navigate("/")}
        title="Old World"
        buttonStyle={{
          backgroundColor: '#fff',
          borderColor: '#960735',
          borderWidth:  2,
          borderRadius: 5,
          height: '30%',
          }}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: '50%',
            marginVertical: 10,
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WineLoverSelection;
