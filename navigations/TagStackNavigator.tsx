import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { RootStackParamList } from '../types/types';
import { TagListScreen } from '../screens/TagListScreen';
import { CreateTagScreen } from '../screens/CreateTagScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  noMean: string
}

export const TagStackNavigator: FC<Props> = ({noMean}) => (
    <>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="TagList" component={TagListScreen} />        
      </Stack.Group>
      <Stack.Group screenOptions={
        {
          presentation: 'modal',
          headerShown: false,
        }
      }>
        <Stack.Screen name="CreateTag" component={CreateTagScreen} />        
        
      </Stack.Group>
    </Stack.Navigator>
    </>
    
);