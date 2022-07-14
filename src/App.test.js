import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText(/MSW Tutorial/i)).toBeInTheDocument();
  });
});

const createComponent = () => {
  return render(<App />);
};
