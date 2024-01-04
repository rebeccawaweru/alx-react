import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { getFooterCopy, getLatestNotification } from './utils';

describe('<App/>', ()=>{
    it('renders the correct year', () => {
        const {getByTestId} = render(<App/>)
        const yearElement = getByTestId('year-display')
        const year = new Date().getFullYear();
        expect(yearElement).toHaveTextContent(year)
    });
    it('check getFooterCopy return value with various parameters', ()=>{
        const trueResult = getFooterCopy(true);
        const falseResult = getFooterCopy(false);
        expect(trueResult).toBe('Holberton School');
        expect(falseResult).toBe('Holberton School main dashboard');
    })

    it('testing getNotification return string', ()=>{
        const result = getLatestNotification();
        expect(result).toBe("<strong>Urgent requirement</strong> - complete by EOD")
    })
})







