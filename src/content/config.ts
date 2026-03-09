import { defineCollection, z } from 'astro:content';

// 1. Blog Collection
const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
	}),
});

// 2. Lessons Collection (Hierarchical)
const learn = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		track: z.string(), // e.g., 'excel-fundamentals'
		chapterNumber: z.number(),
		videoUrl: z.string().url().optional(),
		resources: z.array(z.object({
			label: z.string(),
			url: z.string()
		})).optional(),
		tags: z.array(z.string()).default([]),
	}),
});

// 3. Podcast Collection
const podcast = defineCollection({
	type: 'content',
	schema: z.object({
		episodeNumber: z.number(),
		title: z.string(),
		pubDate: z.coerce.date(),
		audioUrl: z.string().url().optional(),
		youtubeUrl: z.string().url().optional(),
		guestName: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, learn, podcast };