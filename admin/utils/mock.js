export const series = [
  {
    name: 'Films',
    data: [10, 5, 25, 51, 14, 37, 69, 91, 56, 3, 101, 44],
  },
]
export const options = {
  chart: {
    type: 'donut',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
