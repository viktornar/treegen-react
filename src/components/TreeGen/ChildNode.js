import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TreeGen.css';
import stringUtils from '../../core/utils/StringUtils';

class ChildNode extends Component {
  constructor() {
    super();
    this.state = {
      childrenNodes: [],
      label: ""
    };
  }

  render() {
    return (
      <div id={this.props.nodeId} className={`${s.children} row`}>
        <div className={s.circle}>
        </div>
        <label htmlFor={`input-${this.props.nodeId}`} className={s.label}>{this.props.label}</label>
        <div className="col-xs-4">
          <input type="text" className="form-control" id={`input-${this.props.nodeId}`}
                 onChange={this._setLabel.bind(this)} value={this.state.label}/>
        </div>
        <button id={`btn-${this.props.nodeId}-add`} className="btn btn-default"
                onClick={this._appendChild.bind(this)}>Add
        </button>
        <button id={`btn-${this.props.nodeId}-remove`} className={`${s.removeButton} btn btn-default`}
                onClick={this.deleteItems.bind(this)}>Remove
        </button>
        {this.state.childrenNodes}
      </div>
    );
  }

  deleteItems() {
    this.setState(state => {
      state.childrenNodes = [];
    });

    let currNodeIdx = this.props.parentChildrenNodes.findIndex((items)=> {
      return items.key == this.props.nodeId;
    });

    if (currNodeIdx > -1) {
      this.props.parentChildrenNodes.splice(currNodeIdx, 1);
    }

    this.props.parentHandler(this.props.parentChildrenNodes);
  }

  deleteChildrenItem(childrenNodes) {
    this.setState(state => {
      state.childrenNodes = childrenNodes;
    });
  }

  _setLabel(e) {
    let label = e.target.value;
    this.setState({label: label});
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

export default withStyles(s)(ChildNode);
