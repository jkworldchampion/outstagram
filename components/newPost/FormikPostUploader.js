import React, { Component, useState } from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://cdn2.vectorstock.com/i/1000x1000/17/61/select-image-vector-11591761.jpg'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A url is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)


  return (
    <Formik
    initalValues={{caption: '', imageUrl: ''}}
    onSubmit={(value) => console.log(value)}
    validationSchema={uploadPostSchema}
    >

      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Image source={{ uri: PLACEHOLDER_IMG }} style={{ width: 100, height: 100 }}/>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput 
                style={{ color: 'black', fontSize: 20 }}
                placeholder='Write a caption ...'
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                // value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation='vertical'/>
          <TextInput 
            style={{ color: 'black' , fontSize: 18 }}
            placeholder='Enter Image Url'
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            // value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: 'red' }}>
              {errors.imageUrl}
            </Text>
          )}
        </>
      )}

    </Formik>
  )
}

export default FormikPostUploader