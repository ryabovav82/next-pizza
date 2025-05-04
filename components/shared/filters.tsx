'use client';

import React from "react";
import {cn} from "@/lib/utils";
import { Title } from './title';
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filter-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";


interface Props {
    className?: string;
}

interface PriceProps {
    priseFrom: number;
    priseTo: number;
}

export const Filters: React.FC<Props> = ({className}) => {

    const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
    const [price, setPrice] = React.useState<PriceProps>({ priseFrom: 0, priseTo: 5000 });

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

    return (
        <div className={cn("", className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"></Title>

            {/*Верхние чекбоксы*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox name='123' text="Можно собирать" value="1" />
                <FilterCheckbox name='456' text="Новинки" value="2" />
            </div>

            {/*Фильтр цен*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={100} max={30000} placeholder="30000" />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                loading={loading}
                name='ingredients'
                title="Ингредиенты"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
            />

        </div>
    )
}