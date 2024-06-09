class Controller {
    constructor(service) {
        this.service = service;
    }

    async findAll(req, res){
        try {
            const listRegistry = await this.service.getAllRegistry();
            return res.status(200).json(listRegistry); 
        }catch(error) {
            res.status(400).json({message: `failed ${error}`})
            console.log(error);
        }
    }

    async findOneById(req, res) {
        const { id } = req.params;
        try {
            const oneRegistry = await this.service.getRegistryById(Number(id));
            return res.status(200).json(oneRegistry);
        }catch (error) {
            res.status(400).json({message: `failed ${error}`})
            console.log(error);
        }
    }

    async createNew(req, res) {
        const dataCreate = req.body;
        try {
            const newRegistry = await this.service.createRegistry(dataCreate);
            return res.status(200).json(newRegistry);
        }catch(error) {
            res.status(400).json({message: `failed ${error}`})
            console.log(error);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const dateUpdated = req.body;
        try {
            const hasUpdated = await this.service.updateRegistry(dateUpdated, Number(id));
            if(!hasUpdated){
                return res.status(400).json({message: "update registry failed"});
            }
            return res.status(200).json({message: "success update"});
        } catch (error) {
             res.status(400).json({message: `failed ${error}`})
             console.log(error);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.service.deleteRegistry(Number(id));
            res.status(200).json({message: `id ${id} deleted`});
        } catch (error) {
            res.status(400).json({message: `failed ${error}`});
            console.log(error);
        }
    }
}

module.exports = Controller;