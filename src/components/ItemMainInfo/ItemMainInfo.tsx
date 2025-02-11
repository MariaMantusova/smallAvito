import React from "react";
import {Link} from "react-router-dom";
import "./ItemMainInfo.css";
import ItemInfoSubtitle from "../ItemInfoSubtitle/ItemInfoSubtitle";

function ItemMainInfo() {
    return (
        <section className="item">
            <h1 className="item__title">Дом</h1>

            <div className="item__main-info">
                <img className="item__image"
                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="дом"/>

                <div className="item__info">
                   <ItemInfoSubtitle title="Категория" value="Недвижимость" />
                   <ItemInfoSubtitle title="Локация" value="Москва" />
                   <ItemInfoSubtitle title="Тип недвижимости" value="Коттедж" />
                   <ItemInfoSubtitle title="Цена" value="10 000 000 рублей" />
                   <ItemInfoSubtitle title="Площадь" value="200 кв. м." />
                   <ItemInfoSubtitle title="Количество комнат" value="10" />
                </div>
            </div>
            <div className="item__add-info">
                <p className="item__text">Вй особняк в окружении цветущего сада. Бассейн, фонтан, терраса -
                    райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.
                    Величественный особняк в окружении цветущего сада.
                    Бассейн, фонтан, терраса - райский уголок для жизни.</p>

                <Link to="/form" className="item__info__link">Редактировать</Link>
            </div>
        </section>
    )
}

export default ItemMainInfo;