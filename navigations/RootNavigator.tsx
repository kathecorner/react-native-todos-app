import React, { FC, Children } from "react";
import tw from 'tailwind-rn';
import { SafeAreaView, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { TagStackNavigator } from "./TagStackNavigator";
import { useAuthState } from "../hooks/useAuthState";

type Props = {
    noMean: string
}

export const RootNavigator: FC<Props> = ({ }) =>{
    const { user, isLoading } = useAuthState();

    if (isLoading) {
        return (
            <SafeAreaView style={tw('flex-1 items-center justify-center')}>
                <ActivityIndicator size="large" color="gray" />
                <h3>this is RootNavigator</h3>
            </SafeAreaView>
        );
    }
    return (
        <NavigationContainer>
            {user?.uid ? <TagStackNavigator noMean="test" /> : <AuthStackNavigator />}
            <h3>isLoading false</h3>
        </NavigationContainer>
    )
}
