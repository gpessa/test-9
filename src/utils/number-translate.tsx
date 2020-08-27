const MAP = new Map();

MAP.set(" _ " +
        "| |" +
        "|_|", 0)

MAP.set("   " +
        "  |" +
        "  |", 1)

MAP.set(" _ " +
        " _|" +
        "|_ ", 2)

MAP.set(" _ " +
        " _|" +
        " _|", 3)

MAP.set("   " +
        "|_|" +
        "  |", 4)

MAP.set(" _ " +
        "|_ " + 
        " _|", 5)

MAP.set(" _ " +
        "|_" + 
        "|_|", 6)

MAP.set(" _ " +
        "  |" +
        "  |", 7)

MAP.set(" _ " +
        "|_|" +
        "|_|", 8)

MAP.set(" _ " +
        "|_|" +
        " _|", 9)


export const translate = (map: Map<string, number>) => (text: string): number | '?' => {
  const t = map.get(text)
  return t !== undefined ? t : '?'
}

const numberTranslate = translate(MAP);

export default numberTranslate