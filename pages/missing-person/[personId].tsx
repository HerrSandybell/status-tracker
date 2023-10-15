import { useRouter } from 'next/router'
import MissingPerson from '@/src/components/MissingPerson/MissingPerson';
import data from '../../sample-data/sample-data'
import { MissingPerson as MissingPersonType } from '@/types';


function MissinPersonPage() {
  const router = useRouter();
  const personId = router.query.personId;
  
  // fetch person;
  const missingPerson = data.find(person => {
    return person.id === personId
  });

  if (!missingPerson) {
    return;
  }

  const handleSubmitChanges = (person: MissingPersonType) => {
    console.log(person)
  }

  const handleDeletePerson = (personId: string) => {
    console.log(personId)
  }

  return (
    <MissingPerson 
      person={missingPerson as MissingPersonType} 
      onSubmit={handleSubmitChanges} 
      onDelete={handleDeletePerson}
    />
  )
}

export default MissinPersonPage;