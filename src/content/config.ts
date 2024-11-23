import { defineCollection, z} from "astro:content";


// Z = zod schema


const proyects = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string().url(),
        description: z.string(),
    })
})



export const collection = {proyects}