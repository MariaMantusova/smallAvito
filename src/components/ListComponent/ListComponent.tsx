import React from "react";
import "./ListComponent.css";
import ListItem from "../ListItem/ListItem";
import {List} from "antd";
import {IPropsList} from "../../interfaces/interfacesForProps";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";

function ListComponent(props: IPropsList) {
    return (
        <>
            <List className="list"
                  pagination={{align: "center", position: "bottom", pageSize: 5 }}
                  dataSource={props.items}
                  renderItem={(item:IItemAuto | IItemRealEstate | IItemServices) => (
                      <ListItem key={item.id} item={item} />
                  )}/>
        </>
    )
}

export default ListComponent;