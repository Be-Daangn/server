## SOPT 클라이언트 서버 합동 세미나 - 당근 마켓
 
#### 개발   
박세은, 채정아

#### Model - News 소식 글   
<details>
<summary>News.ts</summary>
<div markdown="1">       
 
```js
import mongoose from "mongoose";
import { INews } from "../interfaces/INews";
const NewsSchema = new mongoose.Schema({
    title_idx: {
        type: Number,
        required: true
    },
    title :    {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    info : {
        type: String,
        required: true
    }
});

export default mongoose.model<INews & mongoose.Document>("News", NewsSchema);  
```
 
</div>
</details>   
 
#### Interface - INews   
<details>
<summary>INews.ts</summary>
<div markdown="1">       

```js
export interface INews {
    title_idx: Number;
    title: string;
    image: string;
    event: string;
    place: string;
    info: string;
}   
```
 
</div>
</details>

#### Model - Recommend 추천 글   
<details>
<summary>Recommend.ts</summary>
<div markdown="1">       

 ```js
import mongoose from "mongoose";
import { IRecommend } from "../interfaces/IRecommend";

const RecommendSchema = new mongoose.Schema({
    title_idx: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    customer: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    bookmark: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model<IRecommend & mongoose.Document>("Recommend", RecommendSchema);   
```

</div>
</details>   
 
#### Interface - IRecommend  
<details>
<summary>IRecommend.ts</summary>
<div markdown="1">       

```js
export interface IRecommend {
    title_idx: Number;
    title: string;
    image: string;
    review: Number;
    customer: Number;
    place: string;
    bookmark: Boolean;
}
```
 
</div>
</details>
