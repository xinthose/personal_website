interface verses {
  "verse": string,
  "text": string,
};

interface chapters {
  "chapter": string,
  "verses": Array<verses>,
};

export interface BibleBookIntf {
  "book": string,
  "abbrev": string,
  "chapters": Array<chapters>,
};
