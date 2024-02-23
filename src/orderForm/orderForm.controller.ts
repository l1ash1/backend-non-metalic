import {
  Route,
  Controller,
  Tags,
  SuccessResponse,
  Post,
  Body
} from "tsoa";
import {OrderFormService} from "./orderForm.service";
import {IOrderFormEntity} from "./orderForm.entity";


@Tags('orderForm')
@Route()
export class OrderFormController extends Controller {
  constructor(private readonly _orderFormService: OrderFormService = new OrderFormService()) {
    super();
  }

  @SuccessResponse(201, 'OK')
  @Post('requestcall')
  async postRequestCall(@Body() requestCallInput: IOrderFormEntity): Promise<string> {
    this.setStatus(201)
    return await this._orderFormService.postRequestCall(requestCallInput)
  }
}