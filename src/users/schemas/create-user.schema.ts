import * as Yup from 'yup';
import { CreateUserDto } from '../interfaces/create-user.dto';
import { SchemaOf } from 'yup';

const CreateUserSchema: SchemaOf<CreateUserDto> = Yup.object({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.'),
  confirmation: Yup.string().required('Confirmation is required.'),
});

export default CreateUserSchema;
