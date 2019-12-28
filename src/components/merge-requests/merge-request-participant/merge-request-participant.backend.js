const createDummyRequest = (statutes) => {
  return {
    ghLink: 'https://github.com/aabarmin/common-examples/pulls',
    ghStatus: randomValue('open', 'closed'),
    jiraResolved: randomValue(true, false),
    jiraStatus: randomValue('open', 'in_progress', 'code_review', 'code_reviewed'),
    jiraLink: 'https://jira.thomsonreuters.com/UKBL-100500',
    buildResolved: randomValue(true, false),
    buildStatus: randomValue('not_started', 'in_progress', 'success', 'failed')
  }
}

const randomValue = (...args) => {
  const index = Math.floor(Math.random() * args.length)
  return args[index]
}

export const loadMergeRequestsList = (participant = '', statutes = {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(participant, statutes)
      const result = []
      for (var i = 0; i < randomValue(5, 10, 15); i++) {
        result[result.length] = createDummyRequest()
      }
      resolve(result)
    }, 100)
  })
}