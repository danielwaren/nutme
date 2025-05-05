export interface WordPressPost {
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt?: {
        rendered: string;
    };
    date: string;
    image: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        'author'?: Array<{
            name: string;
        }>;
        'wp:term'?: Array<Array<{
            name: string;
        }>>;
    };
} 