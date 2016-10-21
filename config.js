const config = {
  secret: 'SECRET',
  tokenTime: 1800,
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'dev',
  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/local',
    collection: process.env.MONGO_DEFAULT_COLLECTION || 'users',
  },
  predictionio: {
    accessKey: "BL7rkt7nGYoZfTDtuRDQV8F4Bvzva2VOiIEKYuj15S7wMcM1tGzvcwBW9MLEcb_8",
    hostname: 'predictionio',
  }
};

export default config;