

export default async function fetchingData (id: number) 
{
        const value = await fetch(`http://localhost:3000/graphql`,{
            method: "POST",
            headers: {
            "Content-Type" : "Application/json",
            "Accept" : "Application/json"
            },
            body : JSON.stringify({
                query: `
                    mutation Mutation($itemId: Int!) {
                    getItem(itemId: $itemId) {
                    ... on fail {
                        code
                        msg
                        ok
                        }
                    ... on itemList {
                        name
                        img
                        }
                    }
                    }`,  
                    variables: {
                    itemId: id
                }
            }) 
        }   
        )
        const returnValue = await value.json();
        return returnValue;
}