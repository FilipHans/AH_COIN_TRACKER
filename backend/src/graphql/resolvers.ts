import { GraphQLError } from "graphql/error";
import { IntValueNode } from "graphql";
import { apiToken } from "../middleware/token";
import { Media, itemResponse, apiItemResponse, itemData } from "../interface/response";
import { WowItem } from "../interface/bags";
import { bagInfo } from "../parsing";
import fetchingData from '../middleware/fetch'



const resolvers = {

    Query : {
        ping: async (_p: any ) =>
        {
            return 'Coco is a jew';
        },
        itemList: async(_p: any) => 
        {
            const bags = bagInfo() as [key: string, value: number][];
            if(!bags) return null
            const returnArray: apiItemResponse[] = []

            for(const [k, v] of bags) 
            {
                const INQ = await fetchingData(Number(k));
                const { data } =  INQ as itemData;
                if(data)  returnArray.push({name: data.getItem.name, img: data.getItem.img, quantity: v, itemId: Number(k)})

            }
            
            return returnArray;

        }
    },
    mediaResult : {
        __resolveType(obj: any){
                if (obj.name !== undefined) return "itemList";
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
                const itemInfo = await fetch(`https://eu.api.blizzard.com/data/wow/item/${itemId}?namespace=static-eu&locale=en_US`, 
                    {
                        method: "GET",
                        headers: { Authorization: `Bearer ${token.data}`}
                    }
                )
                if(!itemInfo.ok && !imgRep.ok) return {code: imgRep.status, msg: imgRep.statusText}
                const img = await imgRep.json() as Media;
                const info = await itemInfo.json() as WowItem;
                if(!info.preview_item.binding) return {name: info.name, img: img.assets[0].value}
                return 
        }
    },



}
export default resolvers
