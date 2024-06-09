const dataSource = require('../models');

class Services {
  constructor(nameModel) {
    this.model = nameModel;
  }

  async getAllRegistry() {
    return dataSource[this.model].findAll({
      attributes:{
      exclude: ['hash', 'salt']
    }
  });
  }

  async getRegistryById(id) {
    return dataSource[this.model].findByPk(id, {
      attributes: {
        exclude: ['hash', 'salt']
      }
    });
  }

  async createRegistry(dateRegistry) {
    return dataSource[this.model].create(dateRegistry);
  }

  async updateRegistry(dateUpdated, id) {
    const listRegistryUpdated = await dataSource[this.model].update(dateUpdated, {
      where: { id: id }
    });
    if (listRegistryUpdated[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegistry(id) {
    return dataSource[this.model].destroy({ where: { usuario_id: id } });
  }
}

module.exports = Services;