import { DataPoint } from '@/lib/type'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Chart, LinearScale, BarElement, CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

Chart.register({ LinearScale, BarElement, CategoryScale })

export default function GeographicalDistribution({ data }: { data: DataPoint[] }) {
    const barData = {
        labels: data.map((d) => d.country),
        datasets: [
            {
                label: "Users Gained ",
                data: data.map((data) => data.intensity),
                backgroundColor: "#EC058E",
                borderColor: "#EC058E",
                borderWidth: 2
            }
        ]
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl font-light'>Geographical Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <Bar className='w-full' data={barData} />
                </div>
            </CardContent>
        </Card>
    )
}
