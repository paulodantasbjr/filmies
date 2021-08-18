import { DashboardStyled } from '../styles/homePage'
import { Layout } from '../styles/Layout'
import { Title } from '../components/Title'
import { Avatar } from '../components/Avatar'
import { Icons } from '../components/Icons'
import { Cards } from '../components/Cards'
import { ChartLineFilms } from '../components/FirstCharts/Films'
import { ChartPieFilms } from '../components/SecondCharts/Films'
import { ChartLineSeries } from '../components/FirstCharts/Series'
import { ChartPieSeries } from '../components/SecondCharts/Series'

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
        <div className='films-container'>
          <div className='left-container'>
            <ChartLineFilms />
          </div>
          <div className='right-container'>
            <ChartPieFilms />
          </div>
        </div>
        <div className='series-container'>
          <div className='left-container'>
            <ChartLineSeries />
          </div>
          <div className='right-container'>
            <ChartPieSeries />
          </div>
        </div>
      </DashboardStyled>
    </Layout>
  )
}

export default Home
