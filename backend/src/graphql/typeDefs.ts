const typeDefs = /* GraphQL */ `




type itemList {  
    name: String,
    img: String,  
}

type fail {
    code: Int,
    msg: String,
    ok: Boolean
}

type Map {
    name: String,
    img: String,
    quantity: Int,
    itemId: Int
}
union mediaResult = fail | itemList
type Query
{
    ping : String!,
    itemList : [Map]!
}
type Mutation 
{
    getItem(itemId: Int!) : mediaResult!,
}





`

export default typeDefs;