import React from "react";
import {cn} from "@/lib/utils";
import { Title } from './title';
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filter-group";


interface FiltersProps {
    className?: string;
}

export const Filters: React.FC<FiltersProps> = ({className}) => {
    return (
        <div className={cn("", className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"></Title>

            {/*Верхние чекбоксы*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
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
                title="Ингредиенты"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Моццарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4'
                    },
                    {
                        text: 'Красный лук',
                        value: '5'
                    },
                    {
                        text: 'Томаты',
                        value: '6'
                    }
                ]}
                items={[
                    {
                        text: 'Моццарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4'
                    },
                    {
                        text: 'Красный лук',
                        value: '5'
                    },
                    {
                        text: 'Томаты',
                        value: '6'
                    },
                    {
                        text: 'Моццарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4'
                    },
                    {
                        text: 'Красный лук',
                        value: '5'
                    },
                    {
                        text: 'Томаты',
                        value: '6'
                    }
                ]}
            />

        </div>
    )
}