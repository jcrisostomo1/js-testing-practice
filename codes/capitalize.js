import { assertCompletionStatement } from "@babel/types";

const capitalize = (string) => {
    if (string.length===0 || typeof(string) !== 'string') {
        return '';
    } 

    let capitalized = string.charAt(0).toUpperCase();
    let rest = string.substring(1, string.length).toLowerCase();
    return capitalized.concat(rest);

}

export default capitalize;