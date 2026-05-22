# Contributing to CartFlow

Thanks for taking the time to contribute. Every bit helps — whether it's squashing bugs, improving docs, adding translations, or proposing entirely new features.

## Ways to contribute

- Report a bug you've found
- Propose or discuss a new capability
- Submit a patch or feature PR
- Improve documentation or examples
- Help translate the UI into your language

---

## Setting up a local development environment

1. **Fork and clone** this repository:

   ```sh
   git clone https://github.com/evershopcommerce/evershop.git
   cd evershop
   ```

2. **Create a feature branch** — never work directly on `dev` or `main`:

   ```sh
   git checkout -b feature/my-improvement
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Provision a PostgreSQL database.**  
   CartFlow requires Postgres. Create a database and note the connection details.

5. **Run the setup script** to apply the database schema:

   ```sh
   npm run setup
   ```

6. **Start the dev server:**

   ```sh
   npm run dev
   ```

7. **Build for production:**

   ```sh
   npm run build
   ```

8. **Smoke-test the production build:**

   ```sh
   npm run start
   ```

9. **Run unit tests** (powered by [Jest](https://jestjs.io/)):

   ```sh
   npm run test
   ```

10. **Run the linter:**

    ```sh
    npm run lint
    ```

11. When you're satisfied, **open a pull request** against the `dev` branch.

---

## Writing a good bug report

The more detail you include, the faster it gets resolved. A great report covers:

- **Environment snapshot** — Node.js version, Postgres version, OS, browser, CartFlow version
- **Exact steps to reproduce** — numbered, specific, reproducible
- **What you expected** to happen
- **What actually happened** — paste error messages, logs, or screenshots
- **What you already tried** — saves everyone time

---

## Licensing of contributions

By submitting a pull request you agree that your contribution will be licensed under the same [GNU General Public License v3.0](https://github.com/evershopcommerce/evershop/blob/main/LICENSE) that governs the rest of CartFlow.

---

## Code of Conduct

All participants are expected to follow the [Code of Conduct](./CODE_OF_CONDUCT.md). Respectful, constructive collaboration keeps this project healthy for everyone.
