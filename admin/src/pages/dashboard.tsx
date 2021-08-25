import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    type: 'area',
    foreColor: theme.colors.gray[500],
    toolbar: {
      autoSelected: 'pan',
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: [theme.colors.purple[500]],
  stroke: {
    width: 3,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      enabled: true,
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  markers: {
    size: 5,
    colors: theme.colors.gray[200],
    strokeColor: theme.colors.purple[600],
    strokeWidth: 3,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-01-02',
      '2021-02-04',
      '2021-03-06',
      '2021-04-08',
      '2021-05-10',
      '2021-06-12',
      '2021-07-14',
      '2021-08-16',
      '2021-09-18',
      '2021-10-20',
      '2021-11-22',
      '2021-12-24',
    ],
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
  },
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109, 56, 14, 20, 55, 19],
  },
]

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box p={['6', '8']} bg='gray.200' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Inscritos da semana
            </Text>
            <Chart type='area' options={options} series={series} height={160} />
          </Box>
          <Box p={['6', '8']} bg='gray.200' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Inscritos da semana
            </Text>
            <Chart type='area' options={options} series={series} height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
