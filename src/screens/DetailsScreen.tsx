import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../routes/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({route}: ScreenProps) {
  const {name} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen: {name}</Text>
    </View>
  );
}
