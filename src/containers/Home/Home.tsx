import React from 'react'
import { Link } from 'react-router-dom'
import { FORM_URL, FORM } from '../../constants';

export const Home = () => {
    return (
        <Link to={FORM_URL}>{FORM}</Link>
    );
}