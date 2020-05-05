import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
        const isFirst = currentPage === 1
        const isLast = currentPage === numberOfPages
        // link to previous page and next page
        const prevPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
        const nextPage =  '/page/' + (currentPage + 1).toString()
        console.log(numberOfPages)

        return(
                <Pagination aria-label="Page navigation example">
                        {isFirst ? (
                                <PaginationItem disabled>
                                        <PaginationLink previous href=""/>
                                </PaginationItem>
                        ) : (
                                <PaginationItem>
                                        <PaginationLink previous href={prevPage}/>
                                </PaginationItem>
                        )}

                        {Array.from({ length: numberOfPages }, (_, idx) => currentPage === idx + 1 ? (
                                
                                <PaginationItem active key={`page-number${idx + 1}`}>
                                         {/* return home or the page link if page is valid */}
                                        <PaginationLink href={`/${idx === 0 ? '' : 'page/' + (idx + 1)}`}> 
                                                {(idx + 1)}
                                        </PaginationLink>
                                </PaginationItem>
                                ) : (
                                <PaginationItem key={`page-number${idx + 1}`}>
                                        {/*  return home or the page link if page is valid */}
                                        <PaginationLink href={`/${idx === 0 ? '' : 'page/' + (idx + 1)}`}> 
                                                {(idx + 1)}
                                        </PaginationLink>
                                </PaginationItem>
                                )
                        )}

                        {isLast ? (<PaginationItem disabled>
                                        <PaginationLink next href={nextPage}>

                                        </PaginationLink>
                                </PaginationItem>
                                ) : (
                                <PaginationItem>
                                        <PaginationLink next href={nextPage}></PaginationLink>
                                </PaginationItem>
                                )}
                </Pagination>

        )

}

export default PaginationLinks