
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_R5pOXVk3WMyT@ep-yellow-bush-a4uoptu4-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
  };
  