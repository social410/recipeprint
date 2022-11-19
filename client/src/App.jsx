import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DefaultWrapper from './layouts/DefaultWrapper'
import { Template00, Template01 } from './components/templates'
import Index from './pages/Index'

const templates = [
    { id: '00', component: Template00 },
    { id: '01', component: Template01 },
    // add your templates here and view at localhost:3000/templates/<template-id>/edit
]


function App() {
    return (
        <DefaultWrapper>
            <Routes>
                <Route path="/" element={<Index />} />

                {templates.map(Template => (
                    <Route
                        key={Template.id}
                        path={`/templates/${Template.id}/edit`}
                        element={<Template.component />}
                    />
                ))}

                <Route path="*" element={<h1>Coming soon</h1>} />
            </Routes>
        </DefaultWrapper>
    )
}

export default App
