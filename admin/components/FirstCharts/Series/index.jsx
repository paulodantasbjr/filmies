import { ChartLineSerieStyled } from './styled'
import { Bar } from 'react-chartjs-2'

export const ChartLineSeries = () => {
  const data = {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        label: 'Films',
        data: [12, 19, 3, 5, 2, 3, 7, 10, 14, 30, 12, 3],
        fill: true,

        borderColor: ['#7F7FD5'],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    options: {},
  }
  return (
    <ChartLineSerieStyled>
      <Bar data={data} options={options} height={115} />
    </ChartLineSerieStyled>
  )
}
