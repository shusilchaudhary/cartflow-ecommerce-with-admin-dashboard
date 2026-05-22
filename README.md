<p align="center">
  <h1 align="center">CartFlow</h1>
  <p align="center">A developer-first eCommerce framework built on TypeScript, GraphQL, and React.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/TypeScript-first-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/GraphQL-API-E10098?logo=graphql" alt="GraphQL">
  <img src="https://img.shields.io/badge/React-UI-61DAFB?logo=react" alt="React">
</p>

---

## What is CartFlow?

CartFlow is a full-stack, open-source eCommerce platform engineered for developers who want complete control. Built on a modular architecture, it ships with a production-ready storefront, a powerful admin dashboard, and a GraphQL API layer — all written in TypeScript.

Whether you're launching a boutique store or scaling a multi-category catalog, CartFlow gives you the primitives to build exactly what you need without fighting the framework.

---

## Quick Start with Docker

The fastest way to spin up CartFlow locally:

```bash
curl -sSL https://raw.githubusercontent.com/evershopcommerce/evershop/main/docker-compose.yml > docker-compose.yml
docker compose up -d
```

Your store will be live at `http://localhost:3000` and the admin panel at `http://localhost:3000/admin`.

For a full walkthrough, see the [Installation Guide](https://evershop.io/docs/development/getting-started/installation-guide).

---

## Documentation

| Topic | Link |
|---|---|
| Getting started | [Installation guide](https://evershop.io/docs/development/getting-started/installation-guide) |
| Building extensions | [Extension development](https://evershop.io/docs/development/module/create-your-first-extension) |
| Customizing the storefront | [Theme development](https://evershop.io/docs/development/theme/theme-overview) |

---

## Try the Live Demo

See CartFlow in action before installing anything:

| Panel | Link |
|---|---|
| Admin Dashboard | [Open admin](https://demo.evershop.io/admin) |
| Storefront | [Browse the store](https://demo.evershop.io/) |

**Demo credentials**
- Email: `demo@evershop.io`
- Password: `123456`

---

## Core Features

- **TypeScript-first** — full type safety from database queries to React components
- **GraphQL API** — flexible data fetching for both the storefront and external integrations
- **Modular extensions** — add or remove functionality without touching the core
- **Theme system** — swap or build storefronts with a structured theming API
- **Shadcn/ui components** — accessible, composable UI primitives built in
- **JWT authentication** — secure, stateless auth out of the box
- **Stripe & PayPal** — payment integrations with authorize, capture, and refund support
- **Digital products** — sell downloadable goods alongside physical inventory

---

## Contributing

CartFlow is open-source and welcomes contributions of all kinds — bug fixes, features, docs, translations, or just spreading the word.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) to get your local environment set up, then open a pull request against the `dev` branch.

Found a bug? [Open an issue](https://github.com/evershopcommerce/evershop/issues/new).  
Have an idea? [Submit a feature request](https://github.com/evershopcommerce/evershop/issues/new).

---

## License

CartFlow is released under the [GNU General Public License v3.0](https://github.com/evershopcommerce/evershop/blob/main/LICENSE).
