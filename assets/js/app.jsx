"use client"

function app() {
    const app = document.createElement('div');

    app.id = 'app';

    return{
        render: () => app,
        id: 'app',
       }
    }

export default app