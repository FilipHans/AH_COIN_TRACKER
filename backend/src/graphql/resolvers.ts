import { GraphQLError } from "graphql/error";
import { IntValueNode } from "graphql";
import { apiToken } from "../middleware/token";
import { Media } from "../types/types";




const resolvers = {

    Query : {
        ping: async (_p: any ) =>
        {
            return 'Coco is a jew';
        }
    },
    mediaResult : {
        __resolveType(obj: any){
            console.log(obj)
                if (obj.value !== undefined) return "assetValue";
                if (obj.code !== undefined) return "fail";
                return null;
        }
    },
    Mutation : {
        getItem: async (_p: any, { itemId } : {itemId: IntValueNode }) =>
        {
 
            const token = await apiToken();
            if (!token.ok) return token;
            const imgRep = await fetch(`https://eu.api.blizzard.com/data/wow/media/item/${itemId}?namespace=static-eu&locale=en_US`, 
                {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token.data}`}
                }
            )
            const data = await imgRep.json() as Media;
            return data.assets[0];
        }
    },



}
export default resolvers
