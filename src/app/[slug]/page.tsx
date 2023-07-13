import ArticleContent from '@blog/components/article/content'
import { Metadata, ResolvingMetadata } from 'next'

interface IProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: IProps, parent: ResolvingMetadata): Promise<Metadata> {

    const slug = params.slug

    return {
        title: 'Article',
    }
}

const Article = ({ params, searchParams }: IProps, parent: ResolvingMetadata) => {

    const slug = params.slug

    return <ArticleContent slug={slug} />
}

export default Article
