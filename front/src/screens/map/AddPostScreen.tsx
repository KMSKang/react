import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import PostForm from '@/components/post/PostForm';
import { mapNavigations } from '@/constants';

type AddPostScreenProps = StackScreenProps<
    MapStackParamList,
    typeof mapNavigations.ADD_POST
>;

// function AddPostScreen({ route, navigation }: AddPostScreenProps) {
function AddPostScreen({ route }: AddPostScreenProps) {
    const { location } = route.params;
    return <PostForm location={location} />;
    // const descriptionRef = useRef<TextInput | null>(null);
    // const createPost = useMutateCreatePost();
    // const address = useGetAddress(location);
    // const addPost = useForm({
    //     initialValue: { title: '', description: '' },
    //     validate: validateAddPost,
    // });
    // const datePickerModal = useModal();
    // const [date, setDate] = useState(new Date());
    // const [isPicked, setIsPicked] = useState(false);
    // const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
    // const [score, setScore] = useState(5);
    // const imagePicker = useImagePicker({
    //     initialImages: [],
    // });
    // usePermission('PHOTO');

    // const handleChangeDate = (pickedDate: Date) => {
    //     setDate(pickedDate);
    // };

    // const handleConfirmDate = () => {
    //     setIsPicked(true);
    //     datePickerModal.hide();
    // };

    // const handleSelectMarker = (name: MarkerColor) => {
    //     setMarkerColor(name);
    // };

    // const handleChangeScore = (value: number) => {
    //     setScore(value);
    // };

    // const handleSubmit = () => {
    //     const body = {
    //         date,
    //         title: addPost.values.title,
    //         description: addPost.values.description,
    //         color: markerColor,
    //         score,
    //         imageUris: imagePicker.imageUris,
    //     };

    //     createPost.mutate(
    //         { address, ...location, ...body },
    //         {
    //             onSuccess: () => navigation.goBack(),
    //         },
    //     );
    // };

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => AddPostHeaderRight(handleSubmit),
    //     });
    // }, [handleSubmit, navigation]);

    // return (
    //     <SafeAreaView style={styles.container}>
    //         <ScrollView style={styles.contentContainer}>
    //             <View style={styles.inputContainer}>
    //                 <InputField
    //                     value={address}
    //                     disabled
    //                     icon={
    //                         <Octicons name="location" size={16} color={colors.GRAY_500} />
    //                     }
    //                 />
    //                 <CustomButton
    //                     variant="outlined"
    //                     size="large"
    //                     label={
    //                         isPicked ? `${getDateWithSeparator(date, '. ')}` : '날짜 선택'
    //                     }
    //                     onPress={datePickerModal.show}
    //                 />
    //                 <InputField
    //                     placeholder="제목을 입력하세요."
    //                     error={addPost.errors.title}
    //                     touched={addPost.touched.title}
    //                     returnKeyType="next"
    //                     blurOnSubmit={false}
    //                     onSubmitEditing={() => descriptionRef.current?.focus()}
    //                     {...addPost.getTextInputProps('title')}
    //                 />
    //                 <InputField
    //                     ref={descriptionRef}
    //                     placeholder="기록하고 싶은 내용을 입력하세요. (선택)"
    //                     error={addPost.errors.description}
    //                     touched={addPost.touched.description}
    //                     multiline
    //                     returnKeyType="next"
    //                     {...addPost.getTextInputProps('description')}
    //                 />
    //                 <MarkerSelector
    //                     markerColor={markerColor}
    //                     score={score}
    //                     onPressMarker={handleSelectMarker}
    //                 />
    //                 <ScoreInput score={score} onChangeScore={handleChangeScore} />
    //                 <View style={styles.imagesViewer}>
    //                     <ImageInput onChange={imagePicker.handleChange} />
    //                     <PreviewImageList
    //                         imageUris={imagePicker.imageUris}
    //                         onDelete={imagePicker.delete}
    //                         onChangeOrder={imagePicker.changeOrder}
    //                         showOption
    //                     />
    //                 </View>
    //                 <DatePickerOption
    //                     date={date}
    //                     isVisible={datePickerModal.isVisible}
    //                     onChangeDate={handleChangeDate}
    //                     onConfirmDate={handleConfirmDate}
    //                 />
    //             </View>
    //         </ScrollView>
    //     </SafeAreaView>
    // );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 20,
//         marginBottom: 10,
//     },
//     inputContainer: {
//         gap: 20,
//         marginBottom: 20,
//     },
//     imagesViewer: {
//         flexDirection: 'row',
//     },
// });

export default AddPostScreen;