import { useState } from 'react'
import { Accordion } from './components/Accordion';
import { Search } from './components/Search'
import { Dropdown } from './components/Dropdown'
import { Translate } from './components/Translate'
import { Test } from './components/test'
import { Route } from './components/Route'
import { Header } from './components/Header'



const items = [
    {
        title: 'What is react',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers and developers'
    },
    {
        title: 'How do you ise React?',
        content: 'You use React by using components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red',
    }, {
        label: 'Green',
        value: 'green',
    }, {
        label: 'Blue',
        value: 'blue',
    },
]

export function App() {
    const [selected, setSelected] = useState(options[0])


    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Accordion items={items} />
            </Route>
            <Test />
        </div>
    )
}