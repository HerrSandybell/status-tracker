import { MissingPerson, Status } from '@/types';
import styles from './main-table.module.css'



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

function MainTable() {
  const data: MissingPerson[] = [
    {
      firstName: 'john',
      lastName: 'doe',
      status: Status.ALIVE,
      address: 'fake address'
    },
    {
      firstName: 'jane',
      lastName: 'doe',
      status: Status.DEAD
    },
    {
      firstName: 'jake',
      lastName: 'doe',
      status: Status.MISSING
    },
    {
      firstName: 'josh',
      lastName: 'doe',
      status: Status.UNKNOWN
    }
  ]

  const headers: string[] = getHeaders(data);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => 
            <th key={index}>{header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((person, rowIndex) => 
          <tr key={rowIndex}>
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