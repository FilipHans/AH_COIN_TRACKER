import fs from 'fs';
import {CharacterData , Bag} from './interface/bags.js';
const json = JSON.parse(fs.readFileSync("../data2.json", "utf8"));

const bagKeys = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
const data : CharacterData[] = Object.values(json);
type char = Partial<CharacterData>;

const onlyBags: Bag[] = [];
for (let i = 0; i < data.length - 1; i++)
{
    for (const v of bagKeys)
    {
        const bags = data[i][v] as Bag;    
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

console.log(itemMap)