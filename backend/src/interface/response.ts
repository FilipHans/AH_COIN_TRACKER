export interface Media
{
    assets: [
        {
        key: String,
        value: String,
        file_data_id: number,
        }
    ]
}

export interface tokenResp
{
  access_token: string,
  token_type: string,
  expires_in: number,
  sub: string

}

export interface itemResponse {
  name: String,
  item_subclass : {
    binding?: {
      type: String,
      name: String,
    }
  } 
}

export interface apiItemResponse {
  name: String,
  img: String,
  quantity: number,
  itemId: number 
}
export interface itemData {
  
  data: {
    getItem : {
      name: String,
      img: String,
    }
  }

}