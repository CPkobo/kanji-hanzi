import {
    jaNotInCs, jaNotInCt,
    csNotInJa, csNotInCt,
    ctNotInJa, ctNotInCs,
    kana,
    kokiBushu, kokiDict
} from './data'

const dict = {
    jaNotInCs: new RegExp(`[${jaNotInCs}]`, 'g'),
    jaNotInCt: new RegExp(`[${jaNotInCt}]`, 'g'),
    csNotInJa: new RegExp(`[${csNotInJa}]`, 'g'),
    csNotInCt: new RegExp(`[${csNotInCt}]`, 'g'),
    ctNotInJa: new RegExp(`[${ctNotInJa}]`, 'g'),
    ctNotInCs: new RegExp(`[${ctNotInCs}]`, 'g'),
    kana: new RegExp(`[${kana}]`, 'g'),
    kokiBushu: new RegExp(`[${kokiBushu}]`, 'g'),
    kokiDict
}

export const useDict = () => {
    return useState('dict', () => dict)
}