import React from 'react'
import './style/pagination.css'

const Pagination = ({page, pagesLength, setpage}) => {
//cuantas paginas se veran 
const pagesPerBlock = 8
//vamos a agrupar en bloques las paginas ls cuales tienen que se dinamicas y nos muestre que seguimos en el 1 bloque y si pasamos a la pagina 9 nos muestre que estamos en el bloque 2
    // 1 / 8 = 0.125
    // 2 / 8 = 0.25
    // 3 / 8 = 0.375

    // 16 / 8 = 2
const currentBlock = Math.ceil(page / pagesPerBlock)
//sacando la cantidad de pokemons
const blockLength =  Math.ceil(pagesLength/pagesPerBlock)

const arrPages = []
const initialPage = ((currentBlock - 1) * pagesPerBlock) + 1
// const limitPage = initialPage + pagesPerBlock - 1 es una forma, la otra forma es la siguiente
//para el ultimo bloque se debe considerar que no es exaxto, para lo cual haremos un ternario
const limitPage = blockLength === currentBlock ?  pagesLength : currentBlock * pagesPerBlock
for(let i=initialPage; i<=limitPage; i++){
    arrPages.push(i)
}

const handlePrev = () => {
    setpage(page - 1)
}
const handleNext = () => {
    setpage(page + 1)
}
const handlePage = currentPage => {
setpage(currentPage)
}
  return (
    <div className='pagination'>
        {
            page > 1 && 
        <div onClick={handlePrev} className='pagination__prev pagination__avtive'>&#60;</div>
        }
    
        <div>...</div>
        <ul className='pagination__container'>
            {
                arrPages.map(e => (
                    <li 
                    onClick={() => handlePage(e)}
                    className={`pagination__page ${page === e && 'pagination__active'}`}
                    key={e}>{e}</li>
                ))
            }
        </ul>
        {
            page < pagesLength && 
        <div onClick={handleNext} className='pagination__next'>&#62;</div>
        }
    </div>
  )
}

export default Pagination