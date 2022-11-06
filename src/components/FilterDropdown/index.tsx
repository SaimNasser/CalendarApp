import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { Text, View } from 'react-native';

import { eventTypes } from '../../utills/dummydata';
import { height, width } from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
import AppColors from '../../utills/AppColors';

interface FilterDropdown {
    setSelectedFilter: Function,
    selectedFilter: string,
    options: Array<string>,
}

const FilterDropdown = ({
    setSelectedFilter,
    selectedFilter,
    options,
    showIcon = true,
    containerStyle = {}
}) => {
    const renderFilterRow = (filter: string) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.rowText}>{filter}</Text>
            </View>
        )
    }
    return (
        <ModalDropdown
            renderRow={renderFilterRow}
            onSelect={(i: Number, val: string) => setSelectedFilter(val)}
            options={options}
            dropdownStyle={styles.dropContainer}
            renderRowProps={{ underlayColor: AppColors.underlayGrey }}
            style={[{ width: '48%' }, containerStyle]}>
            <View style={[styles.flexRow, styles.modalContainer]}>
                {showIcon && <Feather
                    name={'filter'}
                    color={AppColors.white}
                    size={height(2)} />}
                <Text style={styles.filterText}>{selectedFilter}</Text>
                <Entypo
                    name={'chevron-with-circle-down'}
                    color={AppColors.white}
                    size={height(2)} />
            </View>
        </ModalDropdown>
    );
};

export default FilterDropdown;
