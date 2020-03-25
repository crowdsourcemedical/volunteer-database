const STAGING = {
  BASE_URL: 'http://localhost:8000',
};

const PRODUCTION = {
  BASE_URL: '',
};

function getEnvVars() {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return STAGING;
  }

  if (env === 'production') {
    return PRODUCTION;
  }

  return STAGING;
}

export default getEnvVars;
