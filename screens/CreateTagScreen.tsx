import React, { FC } from "react";
import tw from 'tailwind-rn';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { useCreateTag } from "../hooks/useCreateTag";
import { InputField } from "../components/inputField";
import { Title } from "../components/Title";
import { IconButton } from "../components/iconButton";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>;

};

export const CreateTagScreen: FC<Props> = ({ navigation }) => {
    const { createErr, name, setName, createTag } = useCreateTag({
        navigation,
    });
    return (
        <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
            <View style={tw('flex-row px-4 justyfy-between w-full')}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={25} color="gray" />
                </TouchableOpacity>
                <View />
            </View>
            <InputField
                leftIcon="tag"
                placeholder="Tag Name"
                autoFocus
                value={name}
                onChangeText={(text: string) => setName(text)}
                />
            <IconButton name="plus" size={20} color="gray" onPress={createTag} />
            {createErr !== '' && (
                <Text style={tw('text-red-500 my-3 font-semibold')}>{createErr}</Text>
            )}

        </SafeAreaView>
    )
}