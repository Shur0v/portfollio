CREATE TABLE portfolio_site_content (
    id text PRIMARY KEY,
    payload jsonb NOT NULL CHECK (jsonb_typeof(payload) = 'object'),
    version bigint NOT NULL DEFAULT 1 CHECK (version > 0),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION portfolio_site_content_revision() RETURNS trigger AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.payload IS NOT DISTINCT FROM OLD.payload THEN
        RETURN NULL;
    END IF;
    UPDATE portfolio_content_revision SET revision = revision + 1 WHERE singleton = true;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER portfolio_site_revision_trigger AFTER INSERT OR UPDATE OR DELETE
ON portfolio_site_content FOR EACH ROW EXECUTE FUNCTION portfolio_site_content_revision();

CREATE OR REPLACE FUNCTION portfolio_notify_content_revision() RETURNS trigger AS $$
BEGIN
    PERFORM pg_notify('portfolio_content_changed', NEW.revision::text);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER portfolio_revision_notify_trigger AFTER UPDATE
ON portfolio_content_revision FOR EACH ROW EXECUTE FUNCTION portfolio_notify_content_revision();
