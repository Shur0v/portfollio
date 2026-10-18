CREATE OR REPLACE FUNCTION portfolio_site_content_version() RETURNS trigger AS $$
BEGIN
    NEW.version := OLD.version + 1;
    NEW.updated_at := now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER portfolio_site_version_trigger BEFORE UPDATE
ON portfolio_site_content FOR EACH ROW EXECUTE FUNCTION portfolio_site_content_version();
