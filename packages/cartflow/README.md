# @cartflow/core

The core CartFlow package. This is the engine that powers the storefront, admin dashboard, and API layer.

## Overview

`@cartflow/core` provides:

- **GraphQL API** — a fully typed schema covering products, orders, customers, cart, checkout, and more
- **React storefront** — server-rendered pages with a modular component system
- **Admin dashboard** — a full-featured back-office for managing catalog, orders, and configuration
- **Extension API** — a hook and area system for safely extending any part of the platform without modifying core files
- **Theme API** — structured overrides for building custom storefronts

## Getting Started

The recommended way to set up a CartFlow project is via Docker:

```bash
curl -sSL https://raw.githubusercontent.com/evershopcommerce/evershop/main/docker-compose.yml > docker-compose.yml
docker compose up -d
```

For a full guide, see the [Installation Documentation](https://evershop.io/docs/development/getting-started/installation-guide).

## Development

```bash
# Install dependencies
npm install

# Initialize the database schema
npm run setup

# Start the dev server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start the production server
npm run start
```

## Documentation

| Topic | Link |
|---|---|
| Installation | [Installation guide](https://evershop.io/docs/development/getting-started/installation-guide) |
| Writing extensions | [Extension development](https://evershop.io/docs/development/module/create-your-first-extension) |
| Building themes | [Theme development](https://evershop.io/docs/development/theme/theme-overview) |

## License

[GPL-3.0 License](https://github.com/evershopcommerce/evershop/blob/main/LICENSE)
