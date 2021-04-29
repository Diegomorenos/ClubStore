import Store from '../models/Store';

export const createStore = async (req, res) => {
    console.log(req.body)

    const { name, category, information, phone, location, imgUrl } = req.body

    const newStore = new Store({
        name,
        category,
        information,
        phone,
        location,
        imgUrl
    })

    const storeSaved = await newStore.save()

    res.status(201).json(storeSaved)
}

export const getStore = async (req, res) => {
    const store = await Store.find()

    res.status(200).json(store)
}

export const getStoreById = async (req, res) => {
    console.log(req.params)
    console.log(req.params.storeId)
    try {
        const store = await Store.findById(req.params.storeId)
        console.log(store)
        if (store !== null) {
            res.status(200).json(store)
        } else {
            res.status(200).json({ error: "La tienda no existe" })
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateStore = async (req, res) => {
    try {
        const updateStore = await Store.findByIdAndUpdate(req.params.storeId, req.body, { new: true })
        console.log(updateStore)
        if (updateStore !== null) {
            res.status(200).json(updateStore)
        } else {
            res.status(200).json({ error: "La tienda no existe" })
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteStore = async (req, res) => {
    try {
        const storeDeleted = await Store.findByIdAndDelete(req.params.storeId)
        console.log(storeDeleted)
        if (storeDeleted !== null) {
            res.status(200).json({ msg: "Tienda Eliminada" })
        } else {
            res.status(200).json({ error: "La tienda no existe" })
        }

    } catch (error) {
        res.status(400).json(error)
    }
}