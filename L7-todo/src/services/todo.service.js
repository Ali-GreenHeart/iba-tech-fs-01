import { v4 as genid } from 'uuid'
let todos = [{
    "title": "rkntgbknf gvcnmv dxbvhbdf",
    "status": 1,
    "id": "ee0e1c44-f10d-40b9-b962-4bb2e9417488"
},
{
    "title": "rkntgbknf gvcnmv dxbvhbdf",
    "status": 1,
    "id": "910c51c7-38bc-4392-b8d4-581ff11e1f1d"
},
{
    "title": "2rkntgbknf gvcnmv dxbvhbdf",
    "status": 2,
    "id": "bb7f52f1-446c-4ceb-8076-87aa849c5b07"
},
{
    "title": "2rkntgbknf gvcnmv dxbvhbdf",
    "status": 2,
    "id": "532993c4-c15a-4765-acaf-a35180b9d167"
}]
const getAllTodo = (status) => todos.filter((todo) => status === undefined ? true : todo.status == status)

const addTodo = (body) => {
    const id = genid()
    const status = body.status ?? 0
    todos.push({ ...body, status, id })
    return { msg: 'done', id }
}
const editTodo = (body, id) => {
    const newBody = { ...body, id }
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return newBody
        }
        return todo;
    })
    return { msg: 'done', data: newBody }
}
const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id)
    return { msg: 'deleted! RIP!', data: null }
}

export default {
    getAllTodo,
    addTodo,
    editTodo,
    deleteTodo
}
