import React, { Component, useState } from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'

const PLACEHOLDER_IMG = ''

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
          <View>
            <Image />
          </View>

          <TextInput placeholder='Write a caption ...'/>
          <TextInput placeholder='Enter Image Url'/>
        </>
      )}

    </Formik>
  )
}

export default FormikPostUploader