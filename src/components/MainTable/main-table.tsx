import { MissingPerson, Status } from "@/types"
import styles from './main-table.module.css';

interface Props {
    missingPersons: MissingPerson[]
}

const getHeaders: string[] = (objects: MissingPerson[]) => {
    if (!(objects && objects.length)) {
      return [];
    }
    
    const keys = new Set<string>();
  
    objects.forEach(obj => {
      const objKeys = Object.keys(obj);
      objKeys.forEach(key => {
        keys.add(key);
      })
    })
  
    return Array.from(keys);
}

const getHighlight = (missingPerson: MissingPerson) => {
    switch(missingPerson["Status"]) {
      case Status.ALIVE:
        return styles.green;
      case Status.DEAD:
        return styles.red;
      case Status.KIDNAPPED:
        return styles.yellow
    }
}

const MainTable = ({ missingPersons } : Props) => {
  const headers: string[] = getHeaders(missingPersons);

  return (    
    <table>
        <thead>
          <tr>
            <th>Edit</th>
            {headers.map((header, index) => 
              <th key={index}>{header}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {missingPersons.map((person, rowIndex) => 
            <tr key={rowIndex} className={getHighlight(person)}>
              <td>
                <button>
                  Modify
                </button>
              </td>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>
                  {person[header] ? person[header] : 'NA'}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    )
}

export default MainTable;