import { useState } from 'react'
import './Video10.css'

interface IUser {
  name?: string
  age?: number | string
  city?: string
}
interface IProps {
  defaultName?: string
  defaultAge?: number
}
const Video10 = (props: IProps) => {
  const { defaultName = 'QAnh', defaultAge = 30 } = props
  const [name, setName] = useState<string>(defaultName)
  const [age, setAge] = useState<number | string>(defaultAge)
  const [city, setCity] = useState<string[]>([
    'Hà Nội',
    'Đà Nẵng',
    'Hồ Chí Minh'
  ])
  const [selectedCity, setSelectedCity] = useState<string>('Hà Nội')

  const [users, setUsers] = useState<IUser[]>([])

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false)

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
      const user = {
          name: name,
          age: age,
          city: selectedCity
      }
      setUsers([...users, user])
      setName('')
      setAge('')
  }

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className='form-user'>
        <div>
          <label>Name:</label>
          <br />
          <input type='text' value={name} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type='text' value={age} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select onChange={e => setSelectedCity(e.target.value)}>
            {city.map(city => {
              return (
                <option key={city} value={city}>
                  {city}
                </option>
              )
            })}
          </select>
        </div>

        <input type='submit' value='Submit' onClick={e => handleSubmit(e)} />
      </div>
      <hr />
      <div>List Users:</div>
      <div className='table-user'>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Video10
