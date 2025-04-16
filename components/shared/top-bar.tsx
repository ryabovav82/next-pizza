import React from "react";
import {cn} from "@/lib/utils";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";
import {Container} from "@/components/shared/container";


interface TopBarProps {
    className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({className}) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container className="flex item-center justify-between">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    )
}