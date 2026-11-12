CREATE TABLE IF NOT EXISTS daily (
 day TEXT NOT NULL, metric TEXT NOT NULL, value REAL NOT NULL, units TEXT NOT NULL,
 received_at TEXT NOT NULL, PRIMARY KEY(day, metric)
);
