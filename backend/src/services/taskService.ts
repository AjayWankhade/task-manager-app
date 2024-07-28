import prisma from "../prismaClient";
import { TaskStatus } from "@prisma/client";

interface TaskCreateInput {
  title: string;
  description?: string;
  status?: TaskStatus;
}

export const createTask = async (data: TaskCreateInput) => {
  const status = data.status?.toUpperCase() as TaskStatus;

  return prisma.task.create({
    data: {
      ...data,
      status,
    },
  });
};

export const getAllTasks = async () => {
  return prisma.task.findMany();
};

export const updateTask = async (
  id: number,
  data: Partial<TaskCreateInput>
) => {
  const status = data.status?.toUpperCase() as TaskStatus | undefined;

  return prisma.task.update({
    where: { id },
    data: {
      ...data,
      ...(status && { status }),
    },
  });
};

export const deleteTask = async (id: number) => {
  return prisma.task.delete({
    where: { id },
  });
};
