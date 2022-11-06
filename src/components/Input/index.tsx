import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View, TextInput, TextInputProps, ViewProps } from 'react-native';
import AppColors from '../../utills/AppColors';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';
import { width, height } from 'react-native-dimension';
import { useForm, Controller, ControllerProps, FieldValue } from 'react-hook-form'

interface InputType extends TextInputProps {
  label: string,
  control: any,
  rules?: Object,
  inputStyle?: TextInputProps,
  numberOfLines?: number,
  containerStyle?: Object
}

const Input = ({
  control,
  placeholder,
  placeholderTextColor,
  label,
  rules,
  multiline,
  inputStyle = {},
  numberOfLines,
  containerStyle,
}: InputType) => {

  return (
    <Controller
      control={control}
      name={label}
      rules={rules}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <View style={[styles.container, containerStyle]}>
          {label && label != '' && <Text style={[styles.label, { color: error ? AppColors.red : AppColors.black }]}>{label}</Text>}
          <TextInput
            style={[styles.textInput, inputStyle, { borderColor: error ? AppColors.red : AppColors.black, textAlignVertical: multiline ? 'top' : 'auto' }]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            numberOfLines={numberOfLines}
          />
          {error && <Text style={[styles.error, { color: error ? AppColors.red : AppColors.black }]}>{error.message || 'Error'}</Text>}
        </View>
      )}
    />
  );
};

export default Input;
