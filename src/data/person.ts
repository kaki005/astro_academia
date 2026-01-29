import { Person, EPersonId } from "@/types/person"

export const PERSONS: Person[] = [
    new Person(EPersonId.Me, "Soshi Kakio", "垣尾颯志", "https://kaki005.github.io/astro_academia/"),
    new Person(EPersonId.Ren, "Ren Fujiwara", "藤原廉", "https://renfujiwara.github.io/"),
    new Person(EPersonId.Matsubara, "Yasuko Matsubara", "松原靖子", "https://researchmap.jp/yasuko_matsubara"),
    new Person(EPersonId.Sakurai, "Yasushi Sakurai", "櫻井保志", "https://www.dm.sanken.osaka-u.ac.jp/~yasushi/index-j.html"),
]
export const PERSON_DIC: Record<string, Person> = {}
PERSONS.forEach(person => {
    PERSON_DIC[person.Id] = person
})
