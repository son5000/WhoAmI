import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const commentSchema = new mongoose.Schema({
  
  author: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    unique: true,
    default: uuidv4, // uuid로 고유한 id를 생성
  },
});

const Comment = 
    mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment;
