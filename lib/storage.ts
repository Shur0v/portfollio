import path from "node:path";

export const dataDirectory = path.resolve(process.env.PORTFOLIO_DATA_DIR || path.join(process.cwd(), "storage"));

