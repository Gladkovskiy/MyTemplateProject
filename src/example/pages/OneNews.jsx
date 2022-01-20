import React, {useEffect, useRef} from 'react'
import {Card} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import useOneNews from '../http/react-query/news/useOneNews.js'
import {normalizeDate} from '../utils/pureFunction.js'
import Helmet from '../components/Helmet'

const OneNews = () => {
  const {id} = useParams()
  const news = useOneNews(id)
  const text = useRef()

  useEffect(() => {
    if (!news.isLoading) text.current.innerHTML = news.data.text
  })

  if (news.isLoading) return <Spinner />

  return (
    <>
      <Helmet title={news.data.title} description="Новости сети Powernet" />

      <Card className="p-1 shadow">
        <Card.Img
          variant="top"
          src={`/image/${news.data.img}`}
          className="w-50"
        />
        <Card.Body>
          <Card.Title>{news.data.title}</Card.Title>
          <Card.Text>{normalizeDate(news.data.updatedAt)}</Card.Text>
          <Card.Text ref={text}></Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default OneNews
