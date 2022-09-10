const ALPHABET_EN = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    I: 'I',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: 'O',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z',
};

const ALPHABET_GR = {
    Α: 'Α',
    Ά: 'Α',
    Β: 'Β',
    Γ: 'Γ',
    Δ: 'Δ',
    Ε: 'Ε',
    Έ: 'Ε',
    Ζ: 'Ζ',
    Η: 'Η',
    Ή: 'Η',
    Θ: 'Θ',
    Ι: 'Ι',
    Ί: 'Ι',
    Κ: 'Κ',
    Λ: 'Λ',
    Μ: 'Μ',
    Ν: 'Ν',
    Ξ: 'Ξ',
    Ο: 'Ο',
    Ό: 'Ο',
    Π: 'Π',
    Ρ: 'Ρ',
    Σ: 'Σ',
    Τ: 'Τ',
    Υ: 'Υ',
    Ύ: 'Υ',
    Φ: 'Φ',
    Χ: 'Χ',
    Ψ: 'Ψ',
    Ω: 'Ω',
    Ώ: 'Ω',
};

export const useAlphabetically = (exhibitorArray, locale = 'gr') => {
    const alphabet = locale === 'en' ? ALPHABET_EN : ALPHABET_GR;

    const arraysByLetter = [];
    Object.entries(alphabet).forEach((letter) => {
        arraysByLetter.push({
            letter,
            exhibitors: [],
        });
    });

    // Filter duplicate letter arrays
    const arrayFinal = arraysByLetter.filter(
        (array) => array.letter[0] === array.letter[1]
    );

    exhibitorArray.forEach((exhibitor) => {
        const firstLetter = alphabet[exhibitor.name[0].toUpperCase()];

        arrayFinal.forEach((array) => {
            if (array.letter[0] === firstLetter) {
                array.exhibitors.push(exhibitor);
            }
        });
    });

    // Sort exhibitors by their name alphabetically
    arrayFinal.forEach((array) => {
        array.exhibitors.sort((a, b) => {
            return a.name.toUpperCase() >= b.name.toUpperCase() ? 1 : -1;
        });

        array.letter = array.letter[1];
    });

    return arrayFinal.filter((array) => array.exhibitors.length > 0);
};
