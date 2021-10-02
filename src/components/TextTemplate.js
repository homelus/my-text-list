import React from 'react';
import './TextTemplate.css';

const TextTemplate = ({form, children}) => {
    return (
        <main className="text-template">
            <div className="title">
                오늘의 생각
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="text-wrapper">
                { children }
            </section>
        </main>
    )
}

export default TextTemplate;