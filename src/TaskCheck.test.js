import { render } from '@testing-library/react';
import ApiContext from './ApiContext';
import TaskCheck from './TaskCheck';

test('renders learn react link', () => {
  const value = {
    tasks: [{ id: 1 }],
    setTasks: () => {},
  }
  const task = {
      id: 1,
      content: "Excercise",
      modified: "2021-01-03T00:00:00.000Z",
      complete: false,
    }

  render(
    <ApiContext.Provider value={value}>
      <TaskCheck task={task}/>
    </ApiContext.Provider>
  );
});