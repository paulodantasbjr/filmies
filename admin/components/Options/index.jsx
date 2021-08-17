import { OptionsStyled } from './styled'

export const Options = () => {
  return (
    <OptionsStyled>
      <label className='toggle' htmlFor='toggleTheme'>
        <input
          className='toggle__input'
          name='toggle'
          type='checkbox'
          id='toggleTheme'
        />
        <div className='toggle__fill'></div>
      </label>
    </OptionsStyled>
  )
}
