import React from "react";

export default class Filter extends React.Component {
  renderFilter(filter, name){
    if(filter === this.props.defaultFilter){
      return name;
    }
    return <a href="javascript:;" onClick={() => this.props.onFilterChange(filter)}>{name}</a>
  }
  render(){
    return (
      <div>
        Show: {this.renderFilter("SHOW_ALL", "All")}, {this.renderFilter("SHOW_COMPLETED", "Completed")}, {this.renderFilter("SHOW_ACTIVE", "Active")}
      </div>
    )
  }
}
