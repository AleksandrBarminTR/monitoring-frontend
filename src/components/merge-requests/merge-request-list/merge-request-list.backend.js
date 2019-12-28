const createDummyParticipant = (name, login) => {
  return {
    id: login,
    name: name,
    login: login
  }
}

export const loadParticipantsList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = [
        createDummyParticipant('Aleksandr Barmin', 'AleksandrBarminTR'),
        createDummyParticipant('Vasilii Emashov', 'VasiliiEmashovTR')
      ]
      resolve(data)
    }, 100)
  })
}
