const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/yes-and-connections_development",
      test: "postgres://postgres:postgres@localhost:5432/yes-and-connections_test",
      e2e: "postgres://postgres:postgres@localhost:5432/yes-and-connections_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
