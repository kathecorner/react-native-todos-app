import React, { FC } from "react";
import tw from 'tailwind-rn';
import { TouchableOpacity, GestureResponderEvent } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { AnyListenerPredicate } from "@reduxjs/toolkit";

type Props = {
    name: any;
    color: string,
    size: number,
    onPress: (e: GestureResponderEvent) => void;
}

export const IconButton: FC<Props> = ({ color, size, onPress, name}) => (
    <TouchableOpacity style={tw('item-center')} onPress={onPress}>
        <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
)