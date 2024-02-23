import MaterialsRepository from "./materials.repository";
import {MaterialsEntity} from "./materials.entity";


export default class MaterialsService {
  constructor(
    private readonly _materialsRepository: MaterialsRepository = new MaterialsRepository()
  ) {}

  async getSand(): Promise<MaterialsEntity[]> {

    return await this._materialsRepository.getSand()
  }
  async getBallast(): Promise<MaterialsEntity[]> {

    return await this._materialsRepository.getBallast()
  }
}