import { useState } from 'react';
import {Content, PublishedButton, Title} from './index';


const Article = (props) => {
  // const Article = ({ title, content }) => {
const [isPublished, setIsPublished] = useState(false)
const publishedArticle = () => {
  setIsPublished(true)
}
console.log(isPublished)
return <div className="article">
  <Title title={props.title} />
  <Content content={props.content} />
  <PublishedButton isPublished={isPublished} onClick={publishedArticle}/>
  {/* <button onClick={() => setIsPublished(true)}>公開</button> */}
</div>
}

export default Article;