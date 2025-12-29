import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { tripsData } from '../data/tripsData';
import TripCard from '../components/TripCard';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, X, Palmtree, Mountain, Building2, Map } from 'lucide-react';

const TripsListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const initialCategory = searchParams.get('category') || '';
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState('all');

    const categories = [
        { id: 'beaches', name: 'Beaches', icon: <Palmtree className="w-4 h-4" />, keywords: ['beach', 'bali', 'santorini', 'australia', 'cairns', 'greece'] },
        { id: 'mountains', name: 'Mountains', icon: <Mountain className="w-4 h-4" />, keywords: ['mountain', 'alps', 'switzerland', 'patagonia', 'iceland', 'banff', 'rockies', 'trek'] },
        { id: 'cities', name: 'Cities', icon: <Building2 className="w-4 h-4" />, keywords: ['city', 'tokyo', 'paris', 'new york', 'dubai', 'cairo', 'kyoto', 'marrakech'] },
        { id: 'adventure', name: 'Adventure', icon: <Map className="w-4 h-4" />, keywords: ['adventure', 'safari', 'inca', 'machu picchu', 'serengeti', 'sahara', 'trek', 'wilderness'] },
    ];

    const priceRanges = [
        { id: 'all', name: 'All Prices' },
        { id: 'budget', name: 'Under ₹50,000', max: 50000 },
        { id: 'mid', name: '₹50,000 - ₹1,00,000', min: 50000, max: 100000 },
        { id: 'luxury', name: 'Above ₹1,00,000', min: 100000 },
    ];

    // Sync with URL params
    useEffect(() => {
        setSearchTerm(searchParams.get('search') || '');
        setActiveCategory(searchParams.get('category') || '');
    }, [searchParams]);

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        updateParams({ search: val, category: activeCategory });
    };

    const handleCategoryClick = (categoryId) => {
        const newCategory = activeCategory === categoryId ? '' : categoryId;
        setActiveCategory(newCategory);
        updateParams({ search: searchTerm, category: newCategory });
    };

    const updateParams = ({ search, category }) => {
        const params = {};
        if (search) params.search = search;
        if (category) params.category = category;
        setSearchParams(params);
    };

    const clearAllFilters = () => {
        setSearchTerm('');
        setActiveCategory('');
        setPriceRange('all');
        setSearchParams({});
    };

    // Filter trips based on search, category, and price
    const filteredTrips = tripsData.filter(trip => {
        // Search filter
        const matchesSearch = searchTerm === '' ||
            trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.destination.toLowerCase().includes(searchTerm.toLowerCase());

        // Category filter
        let matchesCategory = true;
        if (activeCategory) {
            const category = categories.find(c => c.id === activeCategory);
            if (category) {
                matchesCategory = category.keywords.some(keyword =>
                    trip.name.toLowerCase().includes(keyword) ||
                    trip.destination.toLowerCase().includes(keyword) ||
                    trip.description.toLowerCase().includes(keyword)
                );
            }
        }

        // Price filter
        let matchesPrice = true;
        const selectedPrice = priceRanges.find(p => p.id === priceRange);
        if (selectedPrice && priceRange !== 'all') {
            if (selectedPrice.min && selectedPrice.max) {
                matchesPrice = trip.price >= selectedPrice.min && trip.price <= selectedPrice.max;
            } else if (selectedPrice.min) {
                matchesPrice = trip.price >= selectedPrice.min;
            } else if (selectedPrice.max) {
                matchesPrice = trip.price <= selectedPrice.max;
            }
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    const hasActiveFilters = searchTerm || activeCategory || priceRange !== 'all';

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Find Your Next Adventure</h1>
                    <p className="text-slate-500 max-w-2xl">
                        Browse through our curated collection of {tripsData.length} extraordinary trips. From mountain escapes to tropical paradises.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search destinations, trips..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-14 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none shadow-sm"
                        />
                        {searchTerm && (
                            <button onClick={() => { setSearchTerm(''); updateParams({ search: '', category: activeCategory }); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all ${activeCategory === cat.id
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-300 hover:text-primary-600'
                                    }`}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range Filters */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Filter by Price</h3>
                    <div className="flex flex-wrap gap-3">
                        {priceRanges.map(range => (
                            <button
                                key={range.id}
                                onClick={() => setPriceRange(range.id)}
                                className={`px-5 py-3 rounded-full font-semibold transition-all ${priceRange === range.id
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                                    }`}
                            >
                                {range.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Filters Summary */}
                {hasActiveFilters && (
                    <div className="mb-8 flex items-center gap-4">
                        <span className="text-slate-500 text-sm">Active filters:</span>
                        <div className="flex flex-wrap gap-2">
                            {searchTerm && (
                                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                    "{searchTerm}"
                                    <button onClick={() => { setSearchTerm(''); updateParams({ search: '', category: activeCategory }); }}><X size={14} /></button>
                                </span>
                            )}
                            {activeCategory && (
                                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                    {categories.find(c => c.id === activeCategory)?.name}
                                    <button onClick={() => handleCategoryClick(activeCategory)}><X size={14} /></button>
                                </span>
                            )}
                            {priceRange !== 'all' && (
                                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                    {priceRanges.find(p => p.id === priceRange)?.name}
                                    <button onClick={() => setPriceRange('all')}><X size={14} /></button>
                                </span>
                            )}
                        </div>
                        <button onClick={clearAllFilters} className="text-red-500 text-sm font-bold hover:underline">
                            Clear All
                        </button>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-slate-600">
                        Showing <span className="font-bold text-slate-900">{filteredTrips.length}</span> trips
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTrips.length > 0 ? (
                        filteredTrips.map((trip, index) => (
                            <motion.div
                                key={trip.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <TripCard trip={trip} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                                <Search size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No trips found</h3>
                            <p className="text-slate-500 mb-6">Try adjusting your search terms or filters.</p>
                            <button
                                onClick={clearAllFilters}
                                className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TripsListing;
