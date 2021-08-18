import { AvatarStyled } from './styled'

export const Avatar = () => {
  return (
    <AvatarStyled>
      <div className='description'>
        <span>Username</span>
        <p>user@gmail.com</p>
      </div>
      <div className='avatar'>
        <img
          src='https://images.unsplash.com/photo-1629239680936-e9b646847a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          alt='avatar'
        />
      </div>
    </AvatarStyled>
  )
}
