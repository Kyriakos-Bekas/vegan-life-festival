// Locale Dictionaries
const GR_DICTIONARY = {
    Α: ['Α', 'Ά', 'α', 'ά'],
    Β: ['Β', 'β'],
    Γ: ['Γ', 'γ'],
    Δ: ['Δ', 'δ'],
    Ε: ['Ε', 'Έ', 'ε', 'έ'],
    Ζ: ['Ζ', 'ζ'],
    Η: ['Η', 'Ή', 'η', 'ή'],
    Θ: ['Θ', 'θ'],
    Ι: ['Ι', 'Ί', 'ι', 'ί'],
    Κ: ['Κ', 'κ'],
    Λ: ['Λ', 'λ'],
    Μ: ['Μ', 'μ'],
    Ν: ['Ν', 'ν'],
    Ξ: ['Ξ', 'ξ'],
    Ο: ['Ο', 'Ό', 'ο', 'ό'],
    Π: ['Π', 'π'],
    Ρ: ['Ρ', 'ρ'],
    Σ: ['Σ', 'σ', 'ς'],
    Τ: ['Τ', 'τ'],
    Υ: ['Υ', 'Ύ', 'υ', 'ύ'],
    Φ: ['Φ', 'φ'],
    Χ: ['Χ', 'χ'],
    Ψ: ['Ψ', 'ψ'],
    Ω: ['Ω', 'Ώ', 'ω', 'ώ'],
};

const EN_DICTIONARY = {
    A: ['A', 'a'],
    B: ['B', 'b'],
    C: ['C', 'c'],
    D: ['D', 'd'],
    E: ['E', 'e'],
    F: ['F', 'f'],
    G: ['G', 'g'],
    H: ['H', 'h'],
    I: ['I', 'i'],
    J: ['J', 'j'],
    K: ['K', 'k'],
    L: ['L', 'l'],
    M: ['M', 'm'],
    N: ['N', 'n'],
    O: ['O', 'o'],
    P: ['P', 'p'],
    Q: ['Q', 'q'],
    R: ['R', 'r'],
    S: ['S', 's'],
    T: ['T', 't'],
    U: ['U', 'u'],
    V: ['V', 'v'],
    W: ['W', 'w'],
    X: ['X', 'x'],
    Y: ['Y', 'y'],
    Z: ['Z', 'z'],
};

/*
    Helper Function

    Receives a list of exhibitors and a dictionary of letters
    of a locale and returns a list of all exhibitors sorted for
    each letter of the locale's dictionary.
*/
const createLocaleList = (dictionary, exhibitors) => {
    const list = [];

    Object.entries(dictionary).forEach((letter, index) => {
        list.push({
            letter: letter[0],
            exhibitors: [],
        });

        exhibitors.forEach((exhibitor) => {
            if (dictionary[letter[0]].includes(exhibitor.name[0]))
                list[index].exhibitors.push(exhibitor);
        });
    });

    return list;
};

export const createExhibitorList = (exhibitors = []) => {
    const enList = createLocaleList(EN_DICTIONARY, exhibitors);
    const grList = createLocaleList(GR_DICTIONARY, exhibitors);

    const lists = {
        en: enList.filter((array) => array.exhibitors.length > 0),
        gr: grList.filter((array) => array.exhibitors.length > 0),
    };

    return lists;
};
