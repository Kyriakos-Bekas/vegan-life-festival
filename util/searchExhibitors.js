const ACCENTED_LETTERS = {
    Ά: 'Α',
    Έ: 'Ε',
    Ή: 'Η',
    Ί: 'Ι',
    Ό: 'Ο',
    Ύ: 'Υ',
    Ώ: 'Ω',
};

export const searchExhibitors = (searchString, displayList) => {
    const list = [];

    const exhibitors = [
        ...displayList[0][1][0].exhibitors,
        ...displayList[1][1][0].exhibitors,
    ];

    for (let i = 0; i < exhibitors.length; i++) {
        let match = true;
        const { name } = exhibitors[i];

        for (let j = 0; j < searchString.length; j++) {
            const searchChar = searchString[j].toUpperCase();
            const plainSearchChar = ACCENTED_LETTERS[searchChar] || searchChar;

            if (plainSearchChar === ' ') continue;

            const nameChar = name[j]?.toUpperCase() || ' ';
            const plainNameChar = ACCENTED_LETTERS[nameChar] || nameChar;

            if (plainNameChar !== plainSearchChar) match = false;
        }

        if (!match) {
            list = list.filter((item) => item.name !== exhibitors[i].name);
        } else {
            !list.includes(exhibitors[i]) && list.push(exhibitors[i]);
        }
    }

    return list;
};
