import { Operation } from "../database"

export const getOperations = async (req, res) => {
    const operations = await Operation.findAll()
    res.json(operations)
}

export const createOperation = async (req, res) => {
    const operation = await Operation.create(req.body)
    res.json(operation)
}

export const updateOperation = async (req, res) => {
    const { idOp } = req.params

    await Operation.update(req.body, {
        where: { idOperation: idOp }
    })

    const editedOp = await Operation.findOne({
        where: { idOperation: idOp }
    })

    res.json({ editedOp })
}

export const deleteOperation = async (req, res) => {
    const { idOp } = req.params

    await Operation.destroy({
        where: {
            idOperation: idOp
        }
    })
    res.json({ success: 'Operation deleted' })
}