import Card from './card';

const Cards = () => {
    return (
        <div className="bg-custom-gray-900 p-10 flex flex-wrap justify-center items-stretch">
            <Card title="Top-Notch SEO" description="Jump to the top of search results and see your sales soar." buttonLabel="Analysis" status="Generating">
                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Keywords</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Content</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">WWW</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Ranking</span>
                </div>
            </Card>
            <Card title="Responsive Website" description="Encourage sales with a user-friendly website optimized for restaurants." buttonLabel="Customize" status="Active">
                <ul className="text-xs text-custom-gray-400 list-disc pl-5 mt-2">
                    <li>Designed for Restaurant Business</li>
                    <li>Responsive Design</li>
                    <li>Custom Domain</li>
                    <li>Custom Theme Color</li>
                    <li>Light/Dark Mode</li>
                </ul>
            </Card>
            <Card title="Gift Cards" description="Ideal for any occasion, let recipients choose the perfect present." buttonLabel="Generate" status="Active">
                <div className="flex justify-center items-center mt-2">
                    <div className="bg-blue-700 p-2 rounded-lg flex justify-center">
                    <span className="text-xs font-semibold">GIFT CARD</span>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Cards;