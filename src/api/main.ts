/**
 * @route GET api/main/
 * @desc Get 
 * @access Public
 */
import express from "express";
import News from "../model/News";
const router = express.Router();
import Recommend from "../model/Recommend";

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
        res.status(200).send("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error.");
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
        res.json(news);
    } catch (error){
        console.error(error.message);
        res.status(500).send("Server Error");
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
        res.json(posts);
    } catch (error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports  = router;