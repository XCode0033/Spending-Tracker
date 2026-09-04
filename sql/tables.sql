CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS expenses (
    expenses_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    amount INT NOT NULL CHECK (amount > 0),
    title TEXT DEFAULT 'Untitled',
    description TEXT DEFAULT '',
    category TEXT DEFAULT 'none',
    location TEXT DEFAULT 'N/A',
    daily_buget INT DEFAULT 0,
    weekly_budget INT DEFAULT 0,
    monthly_budget INT DEFAULT 0,
    spent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);