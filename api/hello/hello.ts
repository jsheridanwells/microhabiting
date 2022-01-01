import { Schema, model } from 'mongoose';

interface Hello {
  message: string;
}

const schema = new Schema<Hello>({
  message: { type: String, required: true}
});

export default model<Hello>('Hello', schema);
