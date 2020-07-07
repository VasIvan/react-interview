import React, { useContext } from 'react'
import { TodosContext, TodosProvider } from './TodosContext'
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe("complete", () => {
    it("sets complete to true", () => {
        const TestComponent = () => {
            const {todos, setTodos} = useContext(TodosContext)

            const toTrue = () =>{
                let todosCopy = [...todos]
                todosCopy[0].complete = true
                setTodos(todosCopy)
            }

            return (<div>
            <div data-testid="value">{todos[0].complete.toString()}</div>
            <button data-testid="btn" onClick={()=>toTrue()}>set to true</button>
            </div>
            )}

        const wrapper = mount(
            <TodosProvider>
                <TestComponent />
            </TodosProvider>
        )

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("false")

        wrapper.find('[data-testid="btn"]').simulate("click")

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("true")
    })
})