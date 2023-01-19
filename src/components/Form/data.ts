import { ActivityLevel } from '@/types'

interface Data {
    title: string,
    desc: string,
    value: ActivityLevel,
}

export const data = [
    {
        title: 'Brak aktywności fizycznej',
        desc: 'Osoba, która nie wykonuje żadnych regularnych ćwiczeń fizycznych, spędza większość czasu w pozycji siedzącej lub leżącej.',
        value: 'none' as ActivityLevel
    },
    {
        title: 'Niska aktywność fizyczna',
        desc: 'Osoba, która pracuje głównie w pozycji siedzącej, ale wykonuje nieznaczną ilość dodatkowej aktywności fizycznej.',
        value: 'sedentary' as ActivityLevel
    },
    {
        title: 'Umiarkowana aktywność fizyczna',
        desc: 'Osoba, która pracuje głównie nie fizycznie i trenuje 2 razy w tygodniu.',
        value: 'lightly active' as ActivityLevel
    },
    {
        title: 'Wysoka aktywność fizyczna',
        desc: 'Osoba, która pracuje lekko fizycznie i trenuje 3-4 razy w tygodniu.',
        value: 'moderately active' as ActivityLevel
    },
    {
        title: 'Bardzo wysoka aktywność fizyczna',
        desc: 'Osoba, która pracuje ciężko fizycznie i trenuje 5 razy w tygodniu.',
        value: 'very active' as ActivityLevel
    },
    {
        title: 'Ekstremalna aktywność fizyczna',
        desc: 'Osoba, która pracuje ciężko fizycznie i trenuje codziennie.',
        value: 'extremely active' as ActivityLevel
    }
] satisfies Data[];