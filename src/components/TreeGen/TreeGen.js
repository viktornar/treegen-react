import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TreeGen.css';
import stringUtils from '../../core/utils/StringUtils';
import ChildNode from './ChildNode';


class TreeGen extends Component {
  constructor() {
    super();
    this.state = {
      childrenNodes: [],
      label: ""
    };
  }

  render() {
    return (
      <div className={`${s.parent} row`}>
        <div className="col-xs-4">
          <input type="text" className="form-control" onChange={this._setLabel.bind(this)}
                 value={this.state.label}/>
        </div>
        <button className="btn btn-default" onClick={this._appendChild.bind(this)}>Add</button>
        {this.state.childrenNodes}
      </div>
    );
  }

  deleteChildrenItem(childrenNodes) {
    this.setState(state => {
      state.childrenNodes = childrenNodes;
    });
  }

  _setLabel(e) {
    let label = e.target.value;
    this.setState(state => {
      state.label = label || "";
    });
  }

  _appendChild() {
    let childrenNodes = this.state.childrenNodes;
    let id = stringUtils.randomString(4);
    let label = this.state.label || "";
    childrenNodes.push(
      (<ChildNode
          key={id}
          nodeId={id}
          label={label}
          parentChildrenNodes={this.state.childrenNodes}
          parentHandler={this.deleteChildrenItem.bind(this)}/>
      )
    );

    this.setState(state => {
      state.childrenNodes = childrenNodes;
      state.label = "";
    });
  }
}

export default withStyles(s)(TreeGen);
