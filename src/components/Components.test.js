import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import { toggleLabelById } from './utils/utils'
import { initialState } from '../contexts/TodosContext'
import TodoBar from './TodoBar'
import TodoList from './TodoList'
import TodoListLabel from './TodoListLabel'
import TodoListActions from './TodoListActions'

configure({adapter: new Adapter()})

describe('Should render components', () => {

    beforeAll(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {
                todos: initialState,
                setTodos: () => {
                }

            }
        })
    })

    it('Should render it with correct name ', () => {
        const name = 'test'
        const wrapper = shallow(<TodoListLabel id={1} name={name} completed={false}/>)
        expect(wrapper.find('strong').text()).toEqual(name)
    })

    it('Should render completed icon if item is completed ', () => {
        const wrapper = shallow(<TodoListActions id={1} completed />)
        expect(wrapper.find('SettingsBackupRestoreRoundedIcon')).toHaveLength(1)
    })

    it('Should not render completed icon if item is not completed ', () => {
        const wrapper = shallow(<TodoListActions id={1} completed={false} />)
        expect(wrapper.find('SettingsBackupRestoreRoundedIcon')).toHaveLength(0)
    })

    it('Should render not completed icon if item is not completed ', () => {
        const wrapper = shallow(<TodoListActions id={1} completed={false} />)
        expect(wrapper.find('CheckCircleOutlineRoundedIcon')).toHaveLength(1)
    })

    it('Should render list of to do items', () => {
        const wrapper = shallow(<TodoList/>)
        expect(wrapper.find('TodoListLabel')).toHaveLength(initialState.length)
    })

    it('Should correctly toggle completed state for to do item', () => {
        expect(toggleLabelById(initialState, 2)).toEqual([
            {id: 1, name: 'Go to the supermarket', completed: false},
            {id: 2, name: 'Call Alice', completed: true},
            {id: 3, name: 'Ask Alice to call Bob', completed: false},
            {id: 4, name: 'Do the dishes', completed: false},
            {id: 5, name: 'Change car tyres', completed: false}
        ])
    })

    it('Should render to do list', () => {
        const wrapper = shallow(<TodoList/>)
        expect(wrapper).toHaveLength(1)
    })

    it('Should render input for new to do item', () => {
        const wrapper = shallow(<TodoBar/>)
        expect(wrapper).toHaveLength(1)
    })
})