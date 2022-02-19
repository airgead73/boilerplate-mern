const {
  AUTH0_AUDIENCE: audience,
  AUTH0_DOMAIN: domain,
  CLIENT_ORIGIN_URL: clientOriginUrl,
  SERVER_PORT: serverPort
} = process.env;

const clientOrigins = [clientOriginUrl];

if (!audience) {
  throw new Error(
      '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
  );
}

if (!domain) {
  throw new Error(
      '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
  );
}

if (!serverPort) {
  throw new Error(
      '.env is missing the definition of a API_PORT environmental variable'
  );
}

if (!clientOriginUrl) {
  throw new Error(
      '.env is missing the definition of a APP_ORIGIN environmental variable'
  );
}


module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,
};