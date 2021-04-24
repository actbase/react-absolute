/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Absolute from '@actbase/react-absolute';

const Section = ({ children, title }): Node => {
  return (
    <View>
      <Absolute>
        <View
          style={{ position: 'absolute', width: 100, height: 100, left: 10, top: 100, backgroundColor: '#00ff00' }}
        ></View>
      </Absolute>
      <Absolute>
        <View
          style={{ position: 'absolute', width: 100, height: 100, left: 20, top: 110, backgroundColor: '#0000ff' }}
        ></View>
      </Absolute>
      <Absolute>
        <View
          style={{ position: 'absolute', width: 100, height: 100, left: 30, top: 120, backgroundColor: '#00ffff' }}
        />
      </Absolute>

      <TouchableOpacity
        onPress={() => {
          const r = Absolute.add(
            <View
              style={{ backgroundColor: '#ff0', position: 'absolute', width: 100, height: 100, left: 80, top: 200 }}
            />,
          );
          console.log(r);
          setTimeout(() => {
            r();
          }, 3000);
        }}
        style={{ width: 100, height: 40, backgroundColor: '#f00' }}
      >
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Absolute.Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Section />
      </SafeAreaView>
    </Absolute.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
