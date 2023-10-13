import MainTable from '@/src/components/MainTable/main-table';
import data from '../sample-data/sample-data'

function MainTablePage() {
  return (
    <MainTable missingPersons={data} />
  )
}

export default MainTablePage;