/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render} from '@testing-library/react';
import App from '../App/App';
import { getFooterCopy, getLatestNotification } from './utils';

describe('<App/>', ()=>{
    it('renders the correct year', () => {
        render(<App/>)
        const year = new Date().getFullYear();
        expect(year).toBe(2024)
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







