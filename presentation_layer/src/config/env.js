console.log(process.env.API_HOST)

const environment = {
  apihost: process.env.API_HOST || 'localhost',
  apiport: process.env.API_PORT || 3000,
}

export default environment;