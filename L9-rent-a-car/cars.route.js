import { Router } from "express";
import _cars from "./cars.db.js"
import { v4 as genId } from 'uuid'
import authMiddleware from "./authMiddleware.js";

let cars = _cars

const carRouter = new Router()

carRouter.get('/', (req, res) => {
    const activeCars = cars.filter(({ isActive }) => isActive)
    return res.status(200).json(activeCars)
})


carRouter.post("/", (req, res) => {
    const body = req.body
    body.id = genId()
    cars.push(body)
    return res.status(201).json({ msg: 'car has been added!' })
})

carRouter.get("/available", (req, res) => {
    const availableCars = cars.filter(({ isActive, isTaken }) => isActive && !isTaken)
    return res.status(200).json(availableCars)
})
carRouter.get("/rent", (req, res) => {
    const rentedCars = cars.filter(({ isActive, isTaken }) => isActive && isTaken)
    return res.status(200).json(rentedCars)
})
carRouter.post("/rent", (req, res) => {
    const { carId, userFin } = req.body
    cars = cars.map((car) => {
        if (car.id === carId) {
            car.userFinCode = userFin
            car.isTaken = true
        }
        return car;
    })
    return res.status(200).json({ msg: "will be good!", userFin })
})
carRouter.get("/rent/:userFin", (req, res) => {
    const userFin = req.params.userFin
    const rentedCar = cars.filter(({ userFinCode }) => userFin === userFinCode)
    return res.status(200).json(rentedCar)
})
carRouter.get("/:carId", (req, res) => {
    const carId = req.params.carId
    const car = cars.find(({ id }) => id === carId)
    return res.status(200).json(car)
})
carRouter.delete("/:carId", authMiddleware, (req, res) => {
    const carId = req.params.carId
    cars = cars.map((car) => {
        if (car.id === carId) {
            car.isActive = false
            car.userFinCode = ''
            car.isTaken = false
        }
        return car;
    })
    return res.status(200).json({ msg: 'car has been removed, to garage!' })
})

export default carRouter;
