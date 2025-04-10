import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://mock-mate2db_owner:npg_r1ILwSxTye5Q@ep-icy-shadow-a8snf3v8-pooler.eastus2.azure.neon.tech/mock-mate2db?sslmode=require',
  },
});
