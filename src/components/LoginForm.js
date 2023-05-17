import React from 'react';
import { Formik } from 'formik';
import { View, TextInput, Button, Text } from 'react-native';
import * as Yup from 'yup';
import { apiClient } from '../services/api';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Adresse email invalide').required('Champ requis'),
    password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 6 caractères').required('Champ requis'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
        const url = '';
        const params = { param1: '', param2: '' };
        const headers = { Authorization: '' };
    
        const response = await apiClient.post(url, params, headers);
        console.log(response);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          {touched.email && errors.email && <Text>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Mot de passe"
            secureTextEntry
          />
          {touched.password && errors.password && <Text>{errors.password}</Text>}
          <Button title="Se connecter" onPress={handleSubmit} disabled={isSubmitting} />
        </View>
      )}
    </Formik>
  );
};

export { LoginForm };
