import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/utils/colors";

const Button = ({
    title,
    type,
    onPress,
}: {
    title: string;
    type: 'top' | 'right' | 'number';
    onPress : () => void;
}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor:
                            type === 'top'
                                ? Colors.btnDark
                                : type === 'right'
                                ? Colors.btnRight
                                : Colors.btnLight,
                    },
                ]}
                onPress={onPress}
            >
                <Text 
                style={{
                    fontSize: 34,
                    color: type == 'number' ? Colors.black : Colors.white,
                }}
                    >{title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        width: '25%',
        padding: 8,
    },
    button: {
        height: 72,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.btnDark,
    },
});