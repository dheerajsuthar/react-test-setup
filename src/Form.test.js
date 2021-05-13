import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Form, { successMessage, failureMessage, loadingMessage, errorMessage } from './Form';
import api from './api';
jest.mock('./api');

describe('Form Component', () => {
    it('should show two numbers', () => {
        const { container } = loadComponent();
        const numbers = container.querySelector('.number');
        expect(Object.keys(numbers)).toHaveLength(2);
    });
    it('should show the username', () => {
        const { queryByText, model } = loadComponent();
        const user = new RegExp(model.name);
        expect(queryByText(user)).toBeTruthy();
    });
    it('should show the submit button', () => {
        const { queryByText } = loadComponent();
        expect(queryByText('Submit')).toBeTruthy();
    });
    it('should show the loading message on submit', async () => {
        const { container, queryByText } = loadComponent();
        expect(queryByText(loadingMessage)).toBeFalsy();
        fireEvent.change(container.querySelector('input'), { target:{value: 6} });
        fireEvent.click(queryByText('Submit'));
        await waitForElement(() => queryByText(loadingMessage));
    });
    it('should show the error message on submission of invalid input', async () => {
        const { container, queryByText } = loadComponent();
        expect(queryByText(loadingMessage)).toBeFalsy();
        fireEvent.change(container.querySelector('input'), { target:{value: 'random'} });
        fireEvent.click(queryByText('Submit'));
        await waitForElement(() => queryByText(errorMessage));
    });
    it('should show the success message on submission of correct input', async () => {
        api.mockResolvedValue(true);
        const { container, queryByText } = loadComponent();
        expect(queryByText(loadingMessage)).toBeFalsy();
        fireEvent.change(container.querySelector('input'), { target:{value: 6} });
        fireEvent.click(queryByText('Submit'));
        await waitForElement(() => queryByText(successMessage));
    });
    it('should show the failure message on submission of wrong input', async () => {
        api.mockResolvedValue(false);
        const { container, queryByText } = loadComponent();
        expect(queryByText(loadingMessage)).toBeFalsy();
        fireEvent.change(container.querySelector('input'), { target:{value: 6} });
        fireEvent.click(queryByText('Submit'));
        await waitForElement(() => queryByText(failureMessage));
    });
});
function loadComponent(custom = {}) {
    const model = {
        name: 'User',
        number: 3,
        ...custom
    }
    const renderFunctions = render(
        <Form model={model} />
    )


    return {
        ...renderFunctions,
        model
    }
}