import { Box, Center, Container, Input, InputGroup, InputRightElement, Textarea } from '@chakra-ui/react';
import { CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validation/loginValidation';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: loginValidationSchema,
  })
  return (
    <Container as={Center}>
      <Box rounded={'lg'} boxShadow={'5px 5px 5px 0px rgba(0,0,0,0.3)'} w={'40%'} alignSelf={'center'}>
        <form>
          <InputGroup mb={4}>
            <Input
              id='login'
              name='login'
              type='text'
              placeholder='Логин'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.login}
            />
            {formik.touched.login && (
              <InputRightElement>
                {formik.errors.login ? (
                  <SmallCloseIcon color='red.500' />
                ) : (
                  <CheckIcon color='green.500' />
                )}
              </InputRightElement>
            )}
          </InputGroup>
          {formik.touched.login && formik.errors.login ? (
            <div>{formik.errors.login}</div>
          ) : null}
          <Textarea />
        </form>
      </Box>
    </Container>

  )
}

export default Register