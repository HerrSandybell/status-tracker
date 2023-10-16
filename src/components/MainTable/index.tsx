import MainTable from './MainTable';
import data  from '../../../sample-data/sample-data'
import { MissingPerson } from '@/types';
import { useRouter } from 'next/router';

// import { v4 as uuidv4 } from 'uuid';

// const mapData = (persons: MissingPerson[]) => {
//   return persons.map(person => {
//     person['id'] = uuidv4();

//     return person
//   })
// }

function MainTableContainer() {
  const router = useRouter();

  const handleEditPerson = (personId: string) => {
    router.push('/missing-person/' + personId)
  }

  return (
    <MainTable 
      missingPersons={data as MissingPerson[]} 
      onPersonEdit={handleEditPerson}
    />
  )
}

export default MainTableContainer;