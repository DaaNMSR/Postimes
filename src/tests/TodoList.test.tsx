import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/todo/TodoList";



describe('TodoList component', () => {
    test('TodoList renders',() => {
        render(<TodoList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    
    })
})