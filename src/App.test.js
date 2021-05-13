import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// test("it expands when the button is clicked", () => {
//   render(
//     <MemoryRouter>
//       <Sidebar />
//     </MemoryRouter>
//   );
//   click(theButton);
//   expect(theThingToBeOpen);
// });
