import { render, screen } from '@testing-library/react';
import TextBox from '../components/TextBox';

describe('TextBox component', () => {
    test('la caja de texto se encuentra en el documento ', () => {
       render(<TextBox />)
       const article = screen.getByRole('article', { name: 'parrafo principal' })
       expect(article).toBeInTheDocument()
    });

    test('la caja de texto se encuentra en el documento ', () => {
        render(<TextBox />)
        const article = screen.getByRole('article', { name: 'parrafo principal' })
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        })
    }); 
    
})