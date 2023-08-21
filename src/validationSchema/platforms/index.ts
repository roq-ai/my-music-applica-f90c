import * as yup from 'yup';

export const platformValidationSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  song_id: yup.string().nullable().required(),
});
