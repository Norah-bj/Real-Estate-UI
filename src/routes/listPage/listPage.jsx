import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Map from "../../components/map/Map";

function ListPage() {

  const data = listData

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        {data.map(item =>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data}/>
    </div>
  </div>
}

export default ListPage
