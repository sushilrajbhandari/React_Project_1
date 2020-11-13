import React from "react";

const NewsDisplay = (props) => {
  const renderList = props.dataList.map((data) => {
    console.log(data, "MyData");
    return (
      <div key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.feed}</p>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default NewsDisplay;
