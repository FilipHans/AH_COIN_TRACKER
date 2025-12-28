import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import {CharacterData , Bag} from './interface/bags.js';
// all bags are named -1 to 7
const bagKeys = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
const blackListedItems: string[] = ['6948', '184938', '184937', '8952', '12840', '12841']
export function bagInfo () {
// const json = JSON.parse(fs.readFileSync("../data2.json", "utf8"));
const filePath = path.resolve(__dirname, "public", "thunderstrike.json");
const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
const data : CharacterData[] = Object.values(json);


const onlyBags: Bag[] = [];
for (let i = 0; i < data.length - 1; i++)
{
    for (const k of bagKeys)
    {
        const bags = data[i][k] as Bag;    
        onlyBags.push(bags)
    }

}
const R: String[][] = onlyBags.filter(e => e != undefined).map(e => { return e.items}).filter(e => e != undefined || null)
const itemMap: Map<string, number> = new Map();
const repReg = new RegExp(/::::::::([1-9]|[1-5][0-9]|60):::::::::/g)
for(const i of R)
{
    if (i.length == 0) continue;
    const k = i.filter(e => e != null)
    for (const j of k )
    {
        let [item, vol] = j.replaceAll(repReg, '').split(';')
        const add: number = itemMap.get(item) ?? 0; 
        if (vol == undefined) vol = '1'; 
        itemMap.set(item, add + Number(vol))
    }
}
const returnArray: [key: string, value: number][] = [];
itemMap.forEach((v, k) => {
    if(!k.includes(':')) returnArray.push([k, v])
})

const result = returnArray.filter(v => !blackListedItems.includes(v[0]))
return result;
}
