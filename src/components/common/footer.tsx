export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12">
            <div className="py-12 lg:py-2 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
            lg:pt-12">
                <div className="flex items-center gap-2 flex-col">
                    <h2 className="text-2xl font-bold text-blue-400">SumaristaAI &copy; 2025</h2>
                    <p className="text-gray-400 mt-2">Transforme conteúdos longos em resumos claros com inteligência artificial.</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 flex-col text-gray-400 mt-2">
                <a href="mailto:sumaristaai@gmail.com">sumaristaai@gmail.com</a>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4 p-4">
                <a
                    href="https://github.com/matheusmartinsviana/sumaristaai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://img.shields.io/github/stars/matheusmartinsviana/sumaristaai"
                        alt="GitHub Repo Stars"
                        className="h-6"
                    />
                </a>
            </div>
        </footer>
    );
}