import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render component', () => {
    createComponent();
    const linkElement = screen.getByText(/MSW Tutorial/i);
    expect(linkElement).toBeInTheDocument();
  });
});

const createComponent = () => {
  return render(<App />);
};
