import { useEffect, useState } from 'react';
import Card from '../components/posts/Card';

interface Post {
    id: {
        timestamp: number;
        machine: number;
        pid: number;
        increment: number;
        creationTime: string;
    };
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
}

function Home(): JSX.Element {
    const [statePosts, setStatePosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getData() {
        setIsLoading(true);
        try {
            const response = await fetch('/api/posts');
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                setStatePosts(data);
            } else {
                throw new Error("Couldn't get posts");
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='h-full pt-10'>
            <div className='max-w-[90rem] mx-auto flex justify-center'>
                <div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500 italic">{error}</p>
                    ) : statePosts.length > 0 ? (
                        statePosts.map((post: Post) => (
                            <Card key={JSON.stringify(post.id)} post={post} />
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No posts</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;