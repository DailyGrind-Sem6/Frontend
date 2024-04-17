interface Post {
    title: string;
}

interface CardProps {
    post: Post;
}

function Card({ post }: CardProps) {
    return (
        <div role="presentation" className="space-y-4 rounded-md p-5 shadow-[0_0_0_1px_rgba(23,23,23,0.05)] bg-slate-50 dark:bg-dark-50 mb-5">
            <div className="flex items-center">
                <div className="mr-4">
                    <a href="/w3tsa" className="block">
                        <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F518532%2F74fcd272-d96d-4d5a-9ef3-2e04388de666.jpeg" alt="w3tsa profile" loading="lazy" className="h-12 w-12 rounded-full" />
                    </a>
                </div>
                <div className="flex-1">
                    <div>
                        <a href="/w3tsa" className="block font-medium text-gray-900 dark:text-gray-100">Coffee Connoisseur</a>
                        <a href="/w3tsa/next-js-14-setting-up-your-database-4ank" className="block text-xs text-gray-600 dark:text-gray-400">Mar 20 (2 days ago)</a>
                    </div>
                </div>
            </div>
            <div className="lg:ml-16 lg:mr-16">
                <div className="mb-3">
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">
                        <a href="/w3tsa/next-js-14-setting-up-your-database-4ank">{post.title}</a>
                    </h3>
                    <div className="flex space-x-2">
                        <a href="/" className="text-sm dark:text-gray-300">#coffee</a>
                        <a href="/" className="text-sm dark:text-gray-300">#beans</a>
                        <a href="/" className="text-sm dark:text-gray-300">#article</a>
                        <a href="/" className="text-sm dark:text-gray-300">#secretsauce</a>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 text-sm focus:outline-none dark:text-gray-300">
                            <span>2 Reactions</span>
                        </button>
                        <a href="/w3tsa/next-js-14-setting-up-your-database-4ank#comments" className="flex items-center space-x-1 text-sm focus:outline-none dark:text-gray-300">
                            <span>Add comment</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card