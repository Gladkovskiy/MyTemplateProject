import React, {useState} from 'react'
import {Pagination} from 'react-bootstrap'

const PaginationExamole = () => {
  const pages = 50
  const showInlinePages = 20
  const arr = new Array(pages).fill('')
  const [currentPage, setCurrentPage] = useState(1)

  if (pages <= showInlinePages) {
    return (
      <Pagination>
        {arr.map((_, index) => (
          <Pagination.Item
            key={index}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1}
      />

      {currentPage - 4 > 1 && (
        <>
          <Pagination.Item
            onClick={() => setCurrentPage(1)}
            active={currentPage === 1}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis disabled />
        </>
      )}

      {currentPage >= 6 && currentPage <= pages - 5
        ? new Array(5).fill('').map((_, index) => (
            <Pagination.Item
              key={index}
              active={index === 2}
              onClick={() => setCurrentPage(currentPage + (index - 2))}
            >
              {currentPage + (index - 2)}
            </Pagination.Item>
          ))
        : new Array(6).fill('').map((_, index) => {
            if (currentPage < 6) {
              return (
                <Pagination.Item
                  key={index}
                  active={index === currentPage - 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            }
            return (
              <Pagination.Item
                key={index}
                active={pages - 5 + index === currentPage}
                onClick={() => setCurrentPage(pages - 5 + index)}
              >
                {pages - 5 + index}
              </Pagination.Item>
            )
          })}

      {currentPage + 5 <= pages && (
        <>
          <Pagination.Ellipsis disabled />
          <Pagination.Item
            onClick={() => setCurrentPage(pages)}
            active={currentPage === pages}
          >
            {pages}
          </Pagination.Item>
        </>
      )}
      <Pagination.Next
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === pages}
      />
      <Pagination.Last
        onClick={() => setCurrentPage(pages)}
        disabled={currentPage === pages}
      />
    </Pagination>
  )
}

export default PaginationExamole
