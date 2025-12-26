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

