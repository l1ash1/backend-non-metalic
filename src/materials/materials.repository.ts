import {database} from "../database";


export default class MaterialsRepository {

  async getSand() {
      return database.materials.sand
  }

  async getBallast() {
    return database.materials.ballast
  }
}