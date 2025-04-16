import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";


interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({id, name, price, imageUrl, className}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justyfy-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>
                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className="flex justify-between item-crnter mt-4">
                    <span className="text-[20px]">
                        от <b>{price}</b>
                    </span>
                    <Button variant="secondary">
                        <Plus size={20} className="mr-1" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    )
}