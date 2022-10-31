import * as Yup from 'yup'

export const userInfoRegisterValidation = Yup.object({
  about: Yup.string().required(),
  telephoneNumber: Yup.string().required(),
})