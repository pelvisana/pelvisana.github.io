import { defineCollection, z } from 'astro:content';

const evidence = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
	}),
});

const legal = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
	}),
});

export const collections = { evidence, legal };

