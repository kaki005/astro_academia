import { LinkedIcon } from "@/types/icon"

// Set equal to an empty string to hide the icon that you don't want to display
// export const SOCIALS: Icon[] = [
//     { name: "email", href: "mailto:skakio88@sanken.osaka-u.ac.jp", icon_id: "fa-solid fa-envelope", },
//     { name: "linkedln", href: "https://www.linkedin.com/feed/", icon_id: "fa-brands fa-linkedin", },
//     { name: "twitter", href: "https://www.x.com/", icon_id: "fa-brands fa-x-twitter", },
//     { name: "github", href: "https://github.com/kaki005", icon_id: "fa-brands fa-github" },
//     { name: "orcid", href: "https://orcid.org/my-orcid?orcid=0009-0006-6200-3858", icon_id: "fa-brands fa-orcid", },
// ]

export const SOCIALS: LinkedIcon[] = [
    new LinkedIcon("email", "mailto:skakio88@sanken.osaka-u.ac.jp", "mail", "red"),
    new LinkedIcon("linkedln", "https://www.linkedin.com/feed/", "linkedin", "#0A66C2"),
    new LinkedIcon("github", "https://github.com/kaki005", "github", "#9E95B7"),
    new LinkedIcon("orcid", "https://orcid.org/my-orcid?orcid=0009-0006-6200-3858", "orcid", "#A6CE39"),
    new LinkedIcon("Labo", "https://www.dm.sanken.osaka-u.ac.jp/", "school", "gray"),
]
