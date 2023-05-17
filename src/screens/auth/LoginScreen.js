import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import LoginSVG from '../../assets/svg/login.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AuthService from '../../services/AuthService';
import { CustomButton } from '../../components/CustomButton';
import { InputField } from '../../components/InputField';
import { Layout, Text } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../assets/svg/loading.svg';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    AsyncStorage.removeItem('token');

    try {
      const timeoutDuration = 5000; 
      let res;

      const loginPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Délai de connexion dépassé')), timeoutDuration);
        AuthService.Login(values)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });

      res = await loginPromise;
      await AsyncStorage.setItem('token', res.data.token);

      const mePromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Délai de connexion dépassé')), timeoutDuration);
        AuthService.Me()
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });

      res = await mePromise;
      await AsyncStorage.setItem('id', res.data.id.toString());

      navigation.navigate('Tab');
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Veuillez saisir votre adresse e-mail.';
          }

          if (!values.password) {
            errors.password = 'Veuillez saisir votre mot de passe.';
          }

          return errors;
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting, errors }) => (
          <>
            {isSubmitting ? (
              <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loading width={300} height={300} style={{ transform: [{ rotate: '-15deg' }] }} />
              </Layout>
            ) : (
              <Layout style={{ paddingHorizontal: 25 }}>
                <Layout style={{ alignItems: 'center' }}>
                  <LoginSVG
                    height={300}
                    width={300}
                    style={{ transform: [{ rotate: '-5deg' }] }}
                  />
                </Layout>

                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                  }}
                >
                  Connexion
                </Text>

                {errors.general && (
                  <Text
                    style={{
                      color: 'red',
                      marginBottom: 10,
                    }}
                  >
                    {errors.general}
                  </Text>
                )}

                <InputField
                  label={'Email'}
                  icon={
                    <MaterialIcons
                      name="alternate-email"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email} 
                />

                <InputField
                  label={'Mot de passe'}
                  icon={
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                  inputType="password"
                  fieldButtonLabel={'Mot de passe oublié ?'}
                  fieldButtonFunction={() => {}}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password} 
                />

                <CustomButton label={'Connexion'} onPress={handleSubmit} />
              </Layout>
            )}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export { LoginScreen };

