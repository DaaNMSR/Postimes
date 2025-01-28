import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import HomePage from '../pages/HomePage';

const renderHomePage = () => {
    render(
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
};

const getElements = () => {
    const liHTMLElement = screen.getByText('HTML');
    const liCSSElement = screen.getByText('CSS');
    const liJSElement = screen.getByText('JavaScript');
    const titleElement = screen.getByText('Learn more about');
    const titleSpanElement = screen.getByText('Technologies');
    const descriptionJSElement = screen.queryByText('JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.');
    const descriptionHTMLElement = screen.queryByText('HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.');
    const descriptionLinkElement = screen.queryByText('Learn More');
    return { liHTMLElement, liCSSElement, liJSElement, titleElement, titleSpanElement, descriptionJSElement,descriptionHTMLElement,descriptionLinkElement };
}

describe('HomePage', () => {
    it('renders HomePage', () => {
        renderHomePage();

        const { liHTMLElement, liCSSElement, liJSElement, titleElement, titleSpanElement } = getElements();
    
        expect(liHTMLElement).toBeInTheDocument();
        expect(liCSSElement).toBeInTheDocument();
        expect(liJSElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(titleSpanElement).toBeInTheDocument();
    });

    it('does not show a description before clicking on a technology', () => {
        renderHomePage();
        const { descriptionHTMLElement,descriptionLinkElement } = getElements();
      
        expect(descriptionHTMLElement).not.toBeInTheDocument();
        expect(descriptionLinkElement).not.toBeInTheDocument();
    });

    it('displays the description and link after clicking a technology', () => {
        renderHomePage();

        const { liHTMLElement,liJSElement } = getElements();

        fireEvent.click(liHTMLElement);
        const { descriptionHTMLElement, descriptionLinkElement } = getElements();
        expect(descriptionHTMLElement).toBeInTheDocument();
        expect(descriptionLinkElement).toBeInTheDocument();


        fireEvent.click(liJSElement);
        const { descriptionJSElement } = getElements();
        expect(descriptionJSElement).toBeInTheDocument();
        expect(descriptionLinkElement).toBeInTheDocument();
    });
});