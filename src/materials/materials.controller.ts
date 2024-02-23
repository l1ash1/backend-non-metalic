import {
  Route,
  Controller,
  Get,
  Tags,
  SuccessResponse
} from "tsoa";
import MaterialsService from "./materials.service";
import {MaterialsEntity} from "./materials.entity";

@Tags('materials')
@Route()
export class MaterialsController extends Controller {
  constructor( private readonly _materialsService: MaterialsService = new MaterialsService()) {
    super();
  }

  @SuccessResponse(200, 'OK')
  @Get('materials/sand')
  async getSand(): Promise<MaterialsEntity[]> {
    return this._materialsService.getSand()
  }

  @SuccessResponse(200, 'OK')
  @Get('materials/ballast')
  async getBallast(): Promise<MaterialsEntity[]> {
    return this._materialsService.getBallast()
  }
}