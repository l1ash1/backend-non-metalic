import {IOrderFormEntity} from "./orderForm.entity";


export class OrderFormRepository {

  async postRequestCall(data: IOrderFormEntity): Promise<string> {
    console.log(data)

    return 'Ваш запрос принят, наш менеджер перезвонит Вам в ближайшее время'
  }
}