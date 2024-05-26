import { Bar } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { DataPoint } from '@/lib/type'
import { Chart, LinearScale, BarElement, CategoryScale } from 'chart.js'
import { useState } from 'react'

Chart.register({ LinearScale, BarElement, CategoryScale })

export default function BarChart({ end_years, data, setData, dataForFilter }: { end_years: string[], data: DataPoint[], setData: (data: DataPoint[]) => void, dataForFilter: DataPoint[] }) {
    const [selectedYear, setSelectedYear] = useState<string>("")

    const barData = {
        labels: data.map((d) => d.end_year),
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

    const dataChangeByEndYear = (end_year: string) => {
        const filteredData = dataForFilter.filter((d) => d.end_year === end_year)
        setData(filteredData)
        setSelectedYear(end_year)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl font-light '>Tracking: {selectedYear}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="end-year">
                        End Year:
                    </label>
                    <Select onValueChange={dataChangeByEndYear}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {end_years.map((year) => (
                                <SelectItem key={year} value={year}>{year}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Bar className='w-full' data={barData} />
                </div>
            </CardContent>
        </Card>
    )
}
