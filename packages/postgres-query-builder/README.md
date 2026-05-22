# @cartflow/postgres-query-builder

A lightweight, async-first PostgreSQL query builder for Node.js. No ORM overhead — just clean, composable SQL construction with full async/await support.

## Installation

```bash
npm install @evershop/postgres-query-builder
```

## Usage

### Basic SELECT

```javascript
const { select } = require('@evershop/postgres-query-builder');

const products = await select('*')
  .from('product')
  .where('product_id', '>', 1)
  .execute(pool);
```

### Chained WHERE conditions

```javascript
const { select } = require('@evershop/postgres-query-builder');

const products = await select('*')
  .from('product')
  .where('product_id', '>', 1)
  .and('sku', 'LIKE', '%shirt%')
  .execute(pool);
```

### OR conditions

```javascript
const { select } = require('@evershop/postgres-query-builder');

const query = select('*').from('product');
query.where('product_id', '>', 1).and('sku', 'LIKE', '%shirt%');
query.orWhere('price', '>', 100);

const products = await query.execute(pool);
```

### JOIN

```javascript
const { select } = require('@evershop/postgres-query-builder');

const query = select('*').from('product');
query.leftJoin('price').on('product.product_id', '=', 'price.product_id');
query.where('product_id', '>', 1);
query.andWhere('price', '>', 100);

const products = await query.execute(pool);
```

### INSERT

```javascript
const { insert } = require('@evershop/postgres-query-builder');

await insert('user')
  .given({
    name: 'Alice',
    email: 'alice@example.com',
    phone: '555-0100',
    status: 1,
    unknownColumn: 'ignored — columns are validated against the schema'
  })
  .execute(pool);
```

### UPDATE

```javascript
const { update } = require('@evershop/postgres-query-builder');

await update('user')
  .given({
    name: 'Alice',
    email: 'alice@example.com',
    phone: '555-0100',
    status: 1
  })
  .where('user_id', '=', 1)
  .execute(pool);
```

### Transactions

```javascript
const { Pool } = require('pg');
const {
  insert,
  getConnection,
  startTransaction,
  commit,
  rollback
} = require('@evershop/postgres-query-builder');

const pool = new Pool(connectionSettings);
const connection = await getConnection(pool);

await startTransaction(connection);
try {
  await insert('user')
    .given({ name: 'Bob', email: 'bob@example.com', status: 1 })
    .execute(connection);
  await commit(connection);
} catch (err) {
  await rollback(connection);
}
```

## Security

All user-supplied values are parameterized — never interpolated directly into the query string. SQL injection is not possible through the builder's standard API.
