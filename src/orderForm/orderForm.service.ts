import {OrderFormRepository} from "./orderForm.repository";
import {IOrderFormEntity} from "./orderForm.entity";


export class OrderFormService {
  constructor(
    private readonly _orderFormRepository: OrderFormRepository = new OrderFormRepository()
  ) {}

  async postRequestCall(data: IOrderFormEntity): Promise<string> {

    return await this._orderFormRepository.postRequestCall(data)
  }
}