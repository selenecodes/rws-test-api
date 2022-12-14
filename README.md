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

## Production
```bash
# Create the docker image
docker build . -t "rws"
# Star the API and postgres services
docker-compose up -d

# Open your browser on http://localhost:80
```
Open the [Apollo GraphQL explorer](http://localhost:80) in your browser to explore the data.

---
# Usage
The notebooks in the `./examples` directory show how to ingest the 4pp dataset and also show exmaples of how one can query the API's data. For more information, see the [examples](./examples).