import React, {useState} from 'react'
import AllNews from '../components/AllNews'
import AllNewsPagination from '../components/AllNewsPagination'
import useGetNews from '../http/react-query/news/useGetNews.js'
import Spinner from '../components/Spinner'
import Helmet from '../components/Helmet'
import ServerError from '../components/ServerError'

const News = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 10
  const news = useGetNews(currentPage, limit)
  if (news.isLoading) return <Spinner />
  if (news.isError) return <ServerError />
  const pages = Math.ceil(news.data.count / limit)

  return (
    <>
      <Helmet title="Новости" description="Новости сети Powernet" />
      <AllNews page={news.data.rows} />
      <AllNewsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  )
}

export default News
