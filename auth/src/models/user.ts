import mongoose from "mongoose";

// mongoose wont work with ts natively, so need extra logic to force
// type checking when creating new User documents
interface UserAttrs {
  email: string;
  password: string;
}

// the template model for the User
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// the instance of a User model == UserDoc
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

// mongo specific data schema for User
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

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const user = User.build({
//   email: 'a@b.com',
//   password: '1829sis8'
// });

// console.log(user, user.email, user.password);

export { User };
