import { CardStyled } from './styled'
import { BsStarFill } from 'react-icons/bs'

export const Cards = ({ title, total, rate }) => {
  return (
    <CardStyled>
      <div className='card-title'>
        <h2>{title}</h2>
      </div>
      <div className='card-body'>
        <span>{total}</span>
        <div className='card-star'>
          <BsStarFill />
          <p>{rate}</p>
        </div>
      </div>
    </CardStyled>
  )
}
