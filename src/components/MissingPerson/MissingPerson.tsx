import { MissingPerson } from "@/types";

interface Props {
  person: MissingPerson;
  onSubmit: (person: MissingPerson) => void;
  onDelete: (personId: string) => void;
}

function MissinPerson({ person }: Props) {
  return (
    <form>
      {person.id}
    </form>
  )
}

export default MissinPerson;