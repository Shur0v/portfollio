CREATE TABLE IF NOT EXISTS portfolio_projects (
    id text PRIMARY KEY,
    payload jsonb NOT NULL,
    slug text GENERATED ALWAYS AS (payload ->> 'slug') STORED NOT NULL UNIQUE,
    published boolean GENERATED ALWAYS AS ((payload ->> 'published')::boolean) STORED NOT NULL,
    display_order integer GENERATED ALWAYS AS ((payload ->> 'order')::integer) STORED NOT NULL,
    updated_at timestamptz NOT NULL DEFAULT now(),
    CHECK (payload ->> 'id' = id),
    CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
    CHECK (display_order BETWEEN 0 AND 10000)
);

CREATE INDEX IF NOT EXISTS portfolio_projects_order_idx ON portfolio_projects (display_order, id);
CREATE INDEX IF NOT EXISTS portfolio_projects_published_order_idx ON portfolio_projects (display_order, id) WHERE published = true;

CREATE TABLE IF NOT EXISTS portfolio_messages (
    id uuid PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL
);

CREATE INDEX IF NOT EXISTS portfolio_messages_date_idx ON portfolio_messages (created_at DESC, id);
