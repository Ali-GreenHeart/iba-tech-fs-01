import { Router } from "express";
import todoService from "../services/todo.service.js";

const todoRouter = Router()

todoRouter.get('/', (req, res) => {
    const { status } = req.query
    const result = todoService.getAllTodo(status)
    console.log(result)
    return res.json(result);
})
todoRouter.post('/', (req, res) => {
    const result = todoService.addTodo(req.body)
    return res.json(result)
})
todoRouter.put('/:id', (req, res) => {
    const result = todoService.editTodo(req.body, req.params.id)
    return res.json(result)
})
todoRouter.delete('/:id', (req, res) => {
    const result = todoService.deleteTodo(req.params.id)
    return res.json(result)
})

export default todoRouter
