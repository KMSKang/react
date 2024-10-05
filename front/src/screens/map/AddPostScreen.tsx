import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Octicons from 'react-native-vector-icons/Octicons';

import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { colors, mapNavigations } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import useForm from '@/hooks/useForm';
import { getDateWithSeparator, validateAddPost } from '@/utils';
import useMutateCreatePost from '@/hooks/queries/useMutateCreatePost';
import { MarkerColor } from '@/types';
import AddPostHeaderRight from '@/components/AddPostHeaderRight';
import useGetAddress from '@/hooks/useGetAddress';
import MarkerSelector from '@/components/MarkerSelector';
import ScoreInput from '@/components/ScoreInput';
import DatePickerOption from '@/components/DatePickerOption';
import useModal from '@/hooks/useModal';

type AddPostScreenProps = StackScreenProps<
    MapStackParamList,
    typeof mapNavigations.ADD_POST
>;

function AddPostScreen({ route, navigation }: AddPostScreenProps) {
    const { location } = route.params;
    const descriptionRef = useRef<TextInput | null>(null);
    const createPost = useMutateCreatePost();
    const address = useGetAddress(location);
    const addPost = useForm({
        initialValue: { title: '', description: '' },
        validate: validateAddPost,
    });
    const datePickerModal = useModal();
    const [date, setDate] = useState(new Date());
    const [isPicked, setIsPicked] = useState(false);
    const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
    const [score, setScore] = useState(5);

    const handleChangeDate = (pickedDate: Date) => {
        setDate(pickedDate);
    };

    const handleConfirmDate = () => {
        setIsPicked(true);
        datePickerModal.hide();
    };

    const handleSelectMarker = (name: MarkerColor) => {
        setMarkerColor(name);
    };

    const handleChangeScore = (value: number) => {
        setScore(value);
    };

    const handleSubmit = () => {
        const body = {
            // date: new Date(),
            date,
            title: addPost.values.title,
            description: addPost.values.description,
            color: markerColor,
            score,
            imageUris: [],
        };

        createPost.mutate(
            { address, ...location, ...body },
            {
                onSuccess: () => navigation.goBack(),
            },
        );
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => AddPostHeaderRight(handleSubmit),
        });
    // });
    }, [handleSubmit, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <InputField
                        value={address}
                        disabled
                        icon={
                            <Octicons name="location" size={16} color={colors.GRAY_500} />
                        }
                    />
                    {/* <CustomButton variant="outlined" size="large" label={'날짜 선택'} /> */}
                    <CustomButton
                        variant="outlined"
                        size="large"
                        label={
                            isPicked ? `${getDateWithSeparator(date, '. ')}` : '날짜 선택'
                        }
                        onPress={datePickerModal.show}
                    />
                    <InputField
                        placeholder="제목을 입력하세요."
                        error={addPost.errors.title}
                        touched={addPost.touched.title}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={() => descriptionRef.current?.focus()}
                        {...addPost.getTextInputProps('title')}
                    />
                    <InputField
                        ref={descriptionRef}
                        placeholder="기록하고 싶은 내용을 입력하세요. (선택)"
                        error={addPost.errors.description}
                        touched={addPost.touched.description}
                        multiline
                        returnKeyType="next"
                        {...addPost.getTextInputProps('description')}
                    />
                    <MarkerSelector
                        markerColor={markerColor}
                        score={score}
                        onPressMarker={handleSelectMarker}
                    />
                    <ScoreInput score={score} onChangeScore={handleChangeScore} />
                    <DatePickerOption
                        date={date}
                        isVisible={datePickerModal.isVisible}
                        onChangeDate={handleChangeDate}
                        onConfirmDate={handleConfirmDate}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        marginBottom: 10,
    },
    inputContainer: {
        gap: 20,
        marginBottom: 20,
    },
});

export default AddPostScreen;