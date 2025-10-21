import mongoose from "mongoose";

// mongoose wont work with ts natively, so need extra logic to force
// type checking when creating new User documents
interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
// force ts type checking
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
}

const User = mongoose.model<any, UserModel>('User', userSchema);

// User.build({
//   email: 'a@b.com',
//   password: '1829sis8'
// });

export { User };
