import axios from 'axios'

export const loadMergeRequestsList = (participant = '', statutes = {}) => {
  return new Promise(resolve => {
    const jiraStatutes = []
    if (statutes['opened'] === true) {
      jiraStatutes[jiraStatutes.length] = 'OPEN'
    }
    if (statutes['closed'] === true) {
      jiraStatutes[jiraStatutes.length] = 'CLOSED'
    }
    const request = {
      participantName: participant,
      statuses: jiraStatutes
    }
    axios.post('/pull-requests', request).then(response => {
      resolve(response.data)
    })
  })
}
