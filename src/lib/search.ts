export const normalizeQuery=(q:string)=>q.trim().toLowerCase();
export const matchesText=(text:string,q:string)=>normalizeQuery(text).includes(normalizeQuery(q));