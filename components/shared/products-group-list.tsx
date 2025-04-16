'use client';

import React from "react";
import { useIntersection } from 'react-use';
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface ProductsGroupListProps {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
    title,
    items,
    className,
    listClassName,
    categoryId
}) => {

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    items.map((product, i) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id} 
                            name={product.name} 
                            imageUrl={product.imageUrl} 
                            price={product.items[0].price} 
                        />
                    ))
                }
            </div>
        </div>
    )
}