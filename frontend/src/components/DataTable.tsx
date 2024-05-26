import { Card, CardHeader, CardContent, CardTitle } from './ui/card'
import { Table, TableCell, TableHeader, TableRow, TableBody, TableHead } from './ui/table'
import { ScrollArea } from './ui/scroll-area'
import { DataPoint } from '@/lib/type'

export default function DataTable({ data }: { data: DataPoint[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl font-light'>Data Table: {data.length}</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Year</TableHead>
                                <TableHead>Sector</TableHead>
                                <TableHead>Region</TableHead>
                                <TableHead>Intensity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((d, i) => (
                                <TableRow key={i}>
                                    <TableCell>{d.end_year}</TableCell>
                                    <TableCell>{d.sector}</TableCell>
                                    <TableCell>{d.region}</TableCell>
                                    <TableCell>{d.intensity}</TableCell>
                                </TableRow>

                            ))}

                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
