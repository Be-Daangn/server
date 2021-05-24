/**
 * @route GET api/main/
 * @desc Get 
 * @access Public
 */
import express from "express";
import News from "../model/News";
const router = express.Router();
import Recommend from "../model/Recommend";


/**
 * @route Post api/main/recommend
 * @desc Post Recommend post
 * @access Public
 */
router.post("/recommend", async(req, res) => {
    const {
        title_idx, title, image, review, customer, place, bookmark 
    } = req.body;
    try{
        const Posts = { title_idx : title_idx, 
                        title : title, image: image, review: review, customer: customer,
                        place:place, bookmark:bookmark};
        const Post = new Recommend(Posts);
        await Post.save(); 
        res.status(200).send({success: true, message: "추천 글 저장 성공"});
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: 500, success: false, message: "추천 글 저장 실패" });
    }
});
/**
 * @route Post api/main/news
 * @desc Post news post
 * @access Public
 */
 router.post("/news", async(req, res) => {
    const {
        title_idx, title, image, event, place, info
    } = req.body;
    try{
        const news = { title_idx : title_idx, 
                        title : title, image: image, event: event,
                        place:place, info: info};
        const Post = new News(news);
        await Post.save(); 
        res.status(200).send({success: true, message: "소식 글 저장 성공"});
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: 500, success: false, message: "소식 글 저장 실패" });
    }
});

/**
 * @route GET api/main/news
 * @desc Get All News Posts
 * @access Public
 */
router.get("/news", async (req, res) => {
    try{
        const news = await News.find();
        if(!news.length){
            return res.status(200).send({ success: true, message : "소식 리스트 없음"});
        }
        res.json({status: 200, success: true, message: "소식 리스트 가져오기 성공", data: news });
    } catch (error){
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "소식 리스트 가져오기 실패" });
    }
});


/**
 * @route GET api/main/recommend
 * @desc Get All Recommend Posts
 * @access Public
 */
router.get("/recommend", async (req, res) => {
    try{
        const posts = await Recommend.find();
        if(!posts.length){
            return res.status(200).send({ success: true, message : "추천 리스트 없음"});
        }
        res.json({status: 200, success: true, message: "추천 리스트 가져오기 성공", data: posts });
    } catch (error){
        console.error(error.message);
        res.status(500).send({ status: 500, success: false, message: "추천 리스트 가져오기 실패" });
    }
});
/**
 * @route GET api/main/recommend/bookmark
 * @desc Get All Bookmark Posts
 * @access Public
 */
router.get("/recommend/bookmark", async (req, res) => {
    try{
        const bookmark = await Recommend.find({bookmark: true});
        if(!bookmark.length){
            return res.status(200).send({ success: true, message: "저장된 목록 없음"});
        }
        res.json({ status: 200, success: true, message: "북마크 가져오기성공", data: bookmark });
    } catch (error){
        res.status(500).send({ status: 500, success: false, message: "북마크 가져오기 실패" });
    }
});

module.exports  = router;