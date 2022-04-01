import SingleNews from './SingleNews'
import "../css/News.css"
import NewsData from '../data/NewsData'


const AllNews = () => {
  return (
    <div className="all_news">
        {NewsData.map((news, index) => (
            <SingleNews news={news} key={index}/>
        ))}
    </div>
  )
}

export default AllNews