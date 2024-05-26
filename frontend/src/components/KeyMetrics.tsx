import { DataPoint } from '@/lib/type'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export default function KeyMetrics({ topics, sectors, regions, counties, cities, pests, sources, swots, swotsName, setData, dataForFilter }: {
    topics: string[], sectors: string[], regions: string[], counties: string[], cities: string[], pests: string[], sources: string[], swots: number[], swotsName: string[], setData: (data: DataPoint[]) => void, data: DataPoint[], dataForFilter: DataPoint[]
}) {

    const dataChangeByTopic = (topic: string) => {
        const filteredData = dataForFilter.filter((d) => d.topic === topic)
        setData(filteredData)
    }

    const dataChangeBySector = (sector: string) => {
        const filteredData = dataForFilter.filter((d) => d.sector === sector)
        setData(filteredData)
    }

    const dataChangeByRegion = (region: string) => {
        const filteredData = dataForFilter.filter((d) => d.region === region)
        setData(filteredData)
    }

    const dataChangeByCounties = (county: string) => {
        const filteredData = dataForFilter.filter((d) => d.country === county)
        setData(filteredData)
    }

    const dataChangeByCities = (city: string) => {
        const filteredData = dataForFilter.filter((d) => d.region === city)
        setData(filteredData)
    }

    const dataChangeByPest = (pest: string) => {
        const filteredData = dataForFilter.filter((d) => d.pestle === pest)
        setData(filteredData)
    }

    const dataChangeBySource = (source: string) => {
        const filteredData = dataForFilter.filter((d) => d.source === source)
        setData(filteredData)
    }

    const dataChangeBySwot = (swot: string) => {
        const filteredData = dataForFilter.filter((d) => d.likelihood === Number(swot))
        setData(filteredData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-4xl font-light">Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sector</p>
                    <Select onValueChange={dataChangeBySector}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {sectors.map((sector) => (
                                <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Topic</p>
                    <Select onValueChange={dataChangeByTopic}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {topics.map((topic) => (
                                <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Region</p>
                    <Select onValueChange={dataChangeByRegion}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {regions.map((region) => (
                                <SelectItem key={region} value={region}>{region}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Country</p>
                    <Select onValueChange={dataChangeByCounties}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {counties.map((country) => (
                                <SelectItem key={country} value={country}>{country}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">City</p>
                    <Select onValueChange={dataChangeByCities}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((city) => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">PEST</p>
                    <Select onValueChange={dataChangeByPest}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {pests.map((pest) => (
                                <SelectItem key={pest} value={pest}>{pest}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Source</p>
                    <Select onValueChange={dataChangeBySource}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {sources.map((source) => (
                                <SelectItem key={source} value={source}>{source}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">SWOT</p>
                    <Select onValueChange={dataChangeBySwot}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {swots.map((swot) => (
                                <SelectItem key={swot} value={swotsName[swot]}>{swotsName[swot]}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}
