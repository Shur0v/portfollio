CREATE TABLE IF NOT EXISTS portfolio_content_revision (
    singleton boolean PRIMARY KEY DEFAULT true CHECK (singleton),
    revision bigint NOT NULL DEFAULT 1
);

INSERT INTO portfolio_content_revision (singleton) VALUES (true) ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION portfolio_bump_content_revision() RETURNS trigger AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NOT NEW.published THEN RETURN NULL; END IF;
    ELSIF TG_OP = 'DELETE' THEN
        IF NOT OLD.published THEN RETURN NULL; END IF;
    ELSE
        IF NOT OLD.published AND NOT NEW.published THEN RETURN NULL; END IF;
    END IF;
    UPDATE portfolio_content_revision SET revision = revision + 1 WHERE singleton = true;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS portfolio_projects_revision_trigger ON portfolio_projects;
CREATE TRIGGER portfolio_projects_revision_trigger AFTER INSERT OR UPDATE OR DELETE
ON portfolio_projects FOR EACH ROW EXECUTE FUNCTION portfolio_bump_content_revision();
