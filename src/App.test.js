import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText(/MSW Tutorial/i)).toBeInTheDocument();
  });

  it('should render result when submit button is clicked', async () => {
    createComponent();
    userEvent.type(screen.getByRole('textbox'), '12345');
    expect(screen.getByRole('textbox')).toHaveValue('12345')
    userEvent.click(screen.getByRole('button', {
      name: /consultar/i
    }));

    await screen.findByText(/processo número 12345 encontrado\./i);
  });
});

const createComponent = () => {
  return render(<App />);
};
