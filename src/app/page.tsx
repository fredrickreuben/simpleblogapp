import { Metadata } from 'next'
import ArticleList from '@blog/components/article/list'

export const metadata: Metadata = {
    title: 'Blog App',
    description: 'Simple Blog App',
}

const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="px-1 py-24 mx-auto">
                <ArticleList />
            </div>
        </section>
    )
}

export default Home
