import React from 'react';
import {View, Text} from 'react-native';
import {title} from '../../Styles/Typography';

export default function QrCode() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={title}> QrCode </Text>
    </View>
  );
}
