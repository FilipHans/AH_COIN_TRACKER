const typeDefs = /* GraphQL */ `


type assetValue
{
    key: String!,
    value: String!,
    file_data_id: Int!
}

type token {
  access_token: String,
  token_type: String,
  expires_in: Int,
  sub: String

}

type media
{
    assets: assetValue!
}

type fail {
    code: Int,
    msg: String,
    ok: Boolean,
}
union mediaResult = fail | assetValue
union tokenResp = token | fail
type Query
{
    ping : String!,
}
type Mutation 
{
    getItem(itemId: Int!) : mediaResult!,
}





`

export default typeDefs;