"use client";

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
    rating: number; // e.g., 4.8
    totalReviews: number; // e.g., 7078
}

export default function Rating({ rating, totalReviews }: RatingProps) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center gap-2 text-sm sm:text-base"
        >
            <div className="flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => {
                    if (i < fullStars) return <Star fill="yellow" key={i} className="w-4 h-4 sm:w-5 sm:h-5" />;
                    if (i === fullStars && halfStar) return <StarHalf fill="yellow" key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400/50" />;
                    return <Star key={i} fill="yellow" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />;
                })}
            </div>
            <span className="font-semibold text-white">{rating.toFixed(1)}</span>
            <span className="text-white">stars out of {totalReviews.toLocaleString()} reviews</span>
        </motion.div>
    );
}
