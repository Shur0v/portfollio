import { NextResponse } from "next/server";
import { authorizeMutation } from "../../../../lib/auth";
import { deleteProject, getProjects, saveProject } from "../../../../lib/projects";
import { validateProject } from "../../../../lib/validation";
import { readJson } from "../../../../lib/request-body";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: Request, context: Context) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  const { id } = await context.params;
  const previous = (await getProjects()).find(project => project.id === id);
  if (!previous) return NextResponse.json({ error: "Project not found." }, { status: 404 });
  try {
    const project = validateProject(await readJson(request), previous);
    await saveProject(project);
    return NextResponse.json({ project });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save project." }, { status: 400 });
  }
}

export async function DELETE(request: Request, context: Context) {
  if (!await authorizeMutation(request)) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  await deleteProject((await context.params).id);
  return NextResponse.json({ success: true });
}
