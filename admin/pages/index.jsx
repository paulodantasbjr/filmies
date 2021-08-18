import { DashboardStyled } from '../styles/homePage'
import { Layout } from '../styles/Layout'
import { Title } from '../components/Title'
import { Avatar } from '../components/Avatar'
import { Icons } from '../components/Icons'
import { Cards } from '../components/Cards'

const Home = () => {
  return (
    <Layout>
      <DashboardStyled>
        <div className='top-container'>
          <div className='top-left'>
            <Title>Dashboard</Title>
          </div>
          <div className='top-right'>
            <div>
              <Icons />
            </div>
            <div>
              <Avatar />
            </div>
          </div>
        </div>
        <div className='card-container'>
          <Cards title='Filmes' total='143 filmes' rate='4.5' />

          <Cards title='Series' total='72 filmes' rate='4.8' />

          <Cards title='Total' total='215 videos' rate='4.6' />
        </div>
        <div className='main-container'>
          <div className=''>
            <h2>grafico filme</h2>
          </div>
          <div className=''>
            <h2>grafico serie</h2>
          </div>
          <div className=''>
            <h2>grafico dos 2</h2>
          </div>
        </div>
        <div className='sub-container'>
          <div className=''>
            <h2>grafico de genero</h2>
          </div>
          <div className=''>grafico genero dos 2</div>
        </div>
      </DashboardStyled>
    </Layout>
  )
}

export default Home
