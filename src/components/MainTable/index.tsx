import MainTable from './MainTable';
import data  from '../../../sample-data/sample-data'
import { MissingPerson } from '@/types';
// import { v4 as uuidv4 } from 'uuid';

// const mapData = (persons: MissingPerson[]) => {
//   return persons.map(person => {
//     person['id'] = uuidv4();

//     return person
//   })
// }

function MainTableContainer() {
  const handleEditPerson = (personId: string) => {
    console.log(personId)
  }

  return (
    <MainTable 
      missingPersons={data as MissingPerson[]} 
      onPersonEdit={handleEditPerson}
    />
  )
}

export default MainTableContainer;