import React, { FunctionComponent } from 'react'
import { Icon } from 'native-base'
import { Formik } from 'formik'
import { Button, Form, FormItem, Input } from '../../components'
import { Hint } from './styled'
import { getValidationSchema, initialValues, isEmailError } from './data'
import { IProps } from './types'

export const SIGN_IN_FORM_TEST_ID = 'testId/sign-in-form'

export const SignInForm: FunctionComponent<IProps> = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={getValidationSchema}
    onSubmit={onSubmit}
  >
    {({
      handleChange,
      handleSubmit,
      values: { email, password },
      isSubmitting,
      touched,
      errors,
    }) => (
      <Form testID={SIGN_IN_FORM_TEST_ID}>
        <FormItem error={isEmailError(touched, errors)}>
          <Input
            placeholder="Email"
            onChangeText={handleChange('email')}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {isEmailError(touched, errors) && <Icon name="close-circle" />}
        </FormItem>
        <FormItem>
          <Input
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <Hint>hint: password</Hint>
        </FormItem>
        <Button disabled={isSubmitting} onPress={handleSubmit} block>
          {isSubmitting ? 'loading...' : 'Sign In'}
        </Button>
      </Form>
    )}
  </Formik>
)
