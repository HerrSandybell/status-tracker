import { MissingPerson } from "@/types";
import { useState } from "react";
import styles from './MissingPerson.module.css';

interface Props {
  person: MissingPerson;
  onSubmit: (person: MissingPerson) => void;
  onDelete: (personId: string) => void;
}

function MissinPerson({ person, onSubmit }: Props) {
  const [formData, setFormData] = useState<MissingPerson>(person);

  const disabledFields = ["id"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: value
      }
    });
  };

  const handleSubmit= (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.keys(person).map((fieldName) => {
        return (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input 
            type="text" 
            id={fieldName}
            name={fieldName}
            value={formData[fieldName] || ''} 
            onChange={handleInputChange}
            disabled={disabledFields.includes(fieldName)}
          />
        </div>
        )
      })}
      <button type="submit">Submit</button>
    </form>
  )
}

export default MissinPerson;