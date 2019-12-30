import axios from 'axios'

export const loadParticipantsList = () => {
  return new Promise(resolve => {
    axios.get('/participants').then(response => {
      resolve(response.data)
    })
  })
}
