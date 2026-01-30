import { Blog, Badge } from "@/types/blog";

export const BLOGS: Blog[] = [
    new Blog(
        "https://qiita.com/kaki1234/private/86941c900e708373e641",
        new Date(2020, 11),
        [new Badge("Shader", "bg-orange-400 text-black")]),
    new Blog(
        "https://qiita.com/kaki765/items/79d1235f5344877c56a5",
        new Date(2021, 11), [
        new Badge("React", "bg-blue-500 text-white dark:bg-blue-600")]),
    new Blog(
        "https://qiita.com/kaki765/private/0c63831b2d815082c321",
        new Date(2022, 11),
        [new Badge("C#", "bg-green-500 text-white dark:bg-green-600"), new Badge("AWS", "bg-red-400 text-white", "secondary")]),
]
