# Tooling used:
- Typescript
- Postgres
- Apollo GraphQL server
- Prisma Database Schemas
- Nexus Type generator

# Installation
## Development
```bash
# Start the postgres server
docker-compose -d postgres

# Saves the schema to the database
npm run db:dev
# Generate Nexus and GraphQL types
npm run generate
# Run the development server
npm run dev 
```

### Seeding the database
```bash
npm run db:seed
```

## Production
```bash
# Create the docker image
docker build . -t "rws"
# Star the API and postgres services
docker-compose up -d

# Open your browser on http://localhost:80
```
