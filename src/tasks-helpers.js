export const findCategory = (categories=[], categoryId) =>
categories.find(category => category.id === categoryId)

export const findTask = (tasks=[], taskId) =>
tasks.find(task => task.id === taskId)

export const getTasksForCategories = (tasks=[], categoryId) => (
  (!categoryId)
    ? tasks
    : tasks.filter(task => task.categoryId === categoryId)
)

export const countTasksForCategory = (tasks=[], categoryId) =>
tasks.filter(task => task.categoryId === categoryId).length