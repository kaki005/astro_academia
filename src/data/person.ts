import type { Person } from "@/types/person"

export const PERSONS: Person[] = [
    new Person("skakio", "Soshi Kakio", "垣尾颯志", "https://kaki005.github.io/astro_academia/"),
    new Person("rfujiwara", "Ren Fujiwara", "藤原廉", "https://renfujiwara.github.io/"),
    new Person("matsubara", "Yasuko Matsubara", "松原靖子", "https://researchmap.jp/yasuko_matsubara"),
    new Person("sakurai", "Yasushi Sakurai", "櫻井保志", "https://www.dm.sanken.osaka-u.ac.jp/~yasushi/index-j.html"),
]
export const PERSON_DIC: Record<string, Person> = {}
PERSONS.forEach(person => {
    PERSON_DIC[person.Id] = person
})
