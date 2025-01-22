import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GithubPage from '../pages/GithubPage';
import { Provider } from 'react-redux';
import { store } from '../store';


const renderGithubPage = () => {
    render(
        <Provider store={store}>
            <GithubPage />
        </Provider>);
};

const getElements = () => {
    const inputElement = screen.getByPlaceholderText('Github username...') as HTMLInputElement;
    const buttonSort = screen.getByText('Sort: Ascending') as HTMLButtonElement;
    const selectOption = screen.getByText('Watchers') as HTMLSelectElement;
    const paragraph = screen.getByText('No repositories found.') as HTMLParagraphElement;
    return { inputElement,buttonSort,selectOption,paragraph };
}

describe('GitHubPage', () => {

    it('renders GithubPage', () => {
        renderGithubPage();
        
        const { inputElement, buttonSort,selectOption,paragraph } = getElements();
    
        expect(inputElement).toBeInTheDocument();
        expect(buttonSort).toBeInTheDocument();
        expect(selectOption).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
    });

    it('input working', () => {
        renderGithubPage();

        const { inputElement } = getElements();

        fireEvent.change(inputElement, { target: { value: 'reactjs' } });

        expect(inputElement.value).toBe('reactjs');
    })

    it('buttonSort toggles', () => {
        renderGithubPage();

        const { buttonSort } = getElements();

        expect(buttonSort.textContent).toBe('Sort: Ascending');
        fireEvent.click(buttonSort);
        expect(buttonSort.textContent).toBe('Sort: Descending');
        fireEvent.click(buttonSort);
        expect(buttonSort.textContent).toBe('Sort: Ascending');
    })


    it('change selectOption', () => {
        renderGithubPage();

        const { selectOption } = getElements();

        expect(selectOption.value).toBe('watchers');

        fireEvent.change(selectOption, { target: { value: 'forks'} });
        expect(selectOption.value).toBe('forks');

        fireEvent.change(selectOption, { target: { value: 'watchers'} });
        expect(selectOption.value).toBe('watchers');
    })
})


