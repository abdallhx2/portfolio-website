import { Language } from '@/translations';

export interface BlogPostTranslation {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string | { name: string };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number; // in minutes
  readingTime?: string;
  views?: number;
  likes?: number;
  featured: boolean;
  slug: string;
}

export const blogPostsTranslations: Record<Language, BlogPostTranslation[]> = {
  en: [
     {
      id: "context-engineering-ai",
      title: "The New Skill in AI is Not Prompting, It's Context Engineering",
      excerpt: "Prompting is no longer enough — understanding how to engineer the right context is now the real power behind AI.",
      content: `# The New Skill in AI is Not Prompting, It's Context Engineering

For a while, everyone was talking about how to write the perfect prompt. It was all about clever wording, the right structure, or just trial and error until you get a good response. But now, things have shifted.

## Prompting is Just the Surface

Sure, prompting matters. But relying only on prompts is like having a fancy remote with no batteries — you're still limited. The real magic happens when you go deeper.

## It's All About Context

Context engineering is about designing the environment where AI performs best. That means feeding it background knowledge, defining roles, adding relevant data, and shaping the conversation step by step.

You're not just telling the AI what to do — you're building the scene so it understands **how** and **why** to do it.

\`\`\`ts
// Simple example of context engineering
const context = [
  { role: "system", content: "You are a startup consultant." },
  { role: "user", content: "I'm building an app to match volunteers with causes." },
  { role: "assistant", content: "Sounds great. What's your target audience?" }
];
\`\`\`

## Why It Matters

When you design the right context, the AI becomes:
- Smarter
- More aligned with your goal
- More consistent
- Easier to iterate with

In short, **context turns generic responses into tailored solutions.**

## So What's Next?

If you’re building anything with AI — apps, tools, bots, assistants — stop obsessing over prompt perfection and start asking:

> _What does the AI need to know before I ask my question?_

That’s the new skill. That’s **context engineering**.

And once you master that, the AI doesn't just follow — it collaborates.`,
      author: "Abdullah Alhasani",
      publishedAt: "2024-07-15",
      category: "AI & Innovation",
      tags: ["AI", "Context Engineering", "Prompting", "Technology"],
      image: "/project/cv/ai-context.png",
      readTime: 6,
      featured: true,
      slug: "context-engineering-ai"
    },
  ],
  ar: [
   {
      id: "context-engineering-ai",
      title: "المهارة الجديدة في الذكاء الاصطناعي ليست التلقين، بل هندسة السياق",
      excerpt: "ما عاد التلقين يكفي — القوة الحقيقية اليوم في كيف تصمم السياق المناسب لتتفاعل معه نماذج الذكاء.",
      content: `# المهارة الجديدة في الذكاء الاصطناعي ليست التلقين، بل هندسة السياق

لفترة، كان الكل يتحدث عن "كيف تكتب البرومبت الصح". كانت القصة كلها في اختيار الكلمات، أو ترتيب الجملة، أو تكرار المحاولة حتى يضبط الرد. لكن الآن، الصورة اختلفت.

## التلقين مجرد قشرة

صحيح إن البرومبت مهم، لكنه لوحده زي ريموت كنترول فاخر بدون بطاريات — ما راح يوصلك بعيد. السحر الحقيقي يبدأ لما تشتغل أعمق.

## السر في السياق

هندسة السياق معناها: كيف تبني البيئة اللي يشتغل فيها الذكاء الاصطناعي بشكل مثالي. تعطيه خلفية، تعريف أدوار، بيانات مرتبطة، وتوجه الحديث خطوة بخطوة.

ما تطلب منه بس "إيش تسوي"، بل توضح له "ليش" و"كيف" يسويها.

\`\`\`ts
// مثال بسيط على هندسة السياق
const context = [
  { role: "system", content: "أنت مستشار تقني لشركات ناشئة." },
  { role: "user", content: "أنا أبغى أبني تطبيق يربط المتطوعين مع الجهات الغير ربحية." },
  { role: "assistant", content: "فكرة ممتازة. مين الفئة اللي تستهدفها؟" }
];
\`\`\`

## ليه هذا مهم؟

لما تبني السياق الصح، الذكاء الاصطناعي يصير:
- أذكى
- أقرب لهدفك
- أكثر اتساق
- أسهل في التطوير

ببساطة: **السياق يحول الردود العامة إلى حلول مخصصة.**

## وش الخطوة الجاية؟

إذا كنت تبني أي شي بالذكاء الاصطناعي — تطبيق، أداة، بوت، مساعد — لا تضيع وقتك على تحسين البرومبت، بل اسأل نفسك:

> _وش لازم يعرف الذكاء الاصطناعي قبل ما أسأله؟_

هذي هي المهارة. وهذي هي **هندسة السياق**.

ولما تتقنها، الذكاء ما عاد بس يجاوبك، يصير **يشتغل معك.**`,
      author: "عبدالله الحسني",
      publishedAt: "2024-07-15",
      category: "الذكاء الاصطناعي",
      tags: ["الذكاء الاصطناعي", "هندسة السياق", "التلقين", "التقنية"],
      image: "/project/cv/ai-context.png",
      readTime: 6,
      featured: true,
      slug: "context-engineering-ai"
    }
   
  ]
};

export const blogCategoriesTranslations: Record<Language, string[]> = {
  en: ['All', 'Development', 'AI', 'Web Development', 'Security'],
  ar: ['الكل', 'التطوير', 'ذكاء اصطناعي', 'تطوير الويب', 'أمان']
};

export function getBlogPostsByCategoryTranslated(category: string, language: Language): BlogPostTranslation[] {
  const posts = blogPostsTranslations[language];
  
  if (category === 'All' || category === 'الكل') {
    return posts;
  }
  
  return posts.filter(post => post.category === category);
}

export const featuredBlogPostsTranslations: Record<Language, BlogPostTranslation[]> = {
  en: blogPostsTranslations.en.filter(post => post.featured),
  ar: blogPostsTranslations.ar.filter(post => post.featured)
};