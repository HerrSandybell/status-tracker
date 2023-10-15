import { MissingPerson } from "@/types";

interface Props {
  person: MissingPerson;
  onSubmit: (person: MissingPerson) => void;
  onDelete: (personId: string) => void;
}

function MissinPerson({ person }: Props) {
  console.log(Object.entries(person))
  return (
    <form>
        <label>First Name</label>
        <input type="text" value={person["First Name"]}/>
      {person.id}
    </form>
  )
}

export default MissinPerson;