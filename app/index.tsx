
import Calculator from '@/Components/calculator';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'calculator'}}/>
      <Calculator />
    </>
  );
}
