-- Run with: psql -U spendingtrackeruser -d spendingtrackerdb -f db/schema.sql

DROP TABLE IF EXISTS expenses;
DROP TABLE IF EXISTS people;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name    TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS expenses (
  id           SERIAL PRIMARY KEY,
  user_id      INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
  description  TEXT NOT NULL DEFAULT '',
  category     TEXT NOT NULL DEFAULT 'general',
  spent_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
