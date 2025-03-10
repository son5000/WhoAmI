import mongoose from "mongoose";
import dbConnect from "../../../db/db.Connect";
import Comment from "../../../db/models/comment";

export default async function apiHandler(req, res) {

  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        console.log(req.body);
        if(!req.body.author || !req.body.message) {
          throw new Error({message : "작성자와 내용을 확인해주세요."})
        }
        const newComment = await Comment.create(req.body);
        res.status(201).send(newComment);
      } catch (error) {
        console.error("댓글 생성 오류:", error);
        res.status(400).json({ error: error.message || '댓글 생성 중 오류가 발생했습니다.' });
      }
      break;

    case 'GET':
      try {
        // 모든 댓글 데이터 가져오기
        const comments = await Comment.find({});
        res.status(200).json(comments);  // 데이터를 JSON 형태로 응답
      } catch (error) {
        console.error("댓글 조회 오류:", error);
        res.status(500).json({ error: '댓글을 불러오는 중 오류가 발생했습니다.' });
      }
      break;

    default:
      res.status(404).send();
  }
}



