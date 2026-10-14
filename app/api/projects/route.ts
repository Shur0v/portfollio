import { NextResponse } from "next/server";
import { authorizeMutation } from "../../../lib/auth";
import { saveProject } from "../../../lib/projects";
import { validateProject } from "../../../lib/validation";
import { readJson } from "../../../lib/request-body";

export async function POST(request: Request) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  try {
    const project = validateProject(await readJson(request));
    await saveProject(project);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save project." }, { status: 400 });
  }
}
