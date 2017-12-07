import React from 'react';
import ReactDom from 'react-dom';
import './style.less';
import { Icon } from 'antd'
  
class Modal extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            visible: true
        }
    }
    componentDidMount() {
        this.proup = document.createElement("div");
        if(this.props.visible){
            document.body.appendChild(this.proup);
            setTimeout(function (){
                document.querySelector(".modal-wrapper").classList.add("in");
            })
            this._renderLayer();
        }
    }
    componentWillReceiveProps(nextProps) { 
        var that = this;
        if(nextProps.visible){
            document.body.appendChild(this.proup);
            setTimeout(function (){
                document.querySelector(".modal-wrapper").classList.add("in");
            })
            this._renderLayer();
        }
        else{
            if(document.querySelector(".modal-wrapper") != null){
                document.querySelector(".modal-wrapper").classList.remove("in");
                setTimeout(function (){
                    that.proup.parentElement.removeChild(that.proup)
                },300)
            }
        }
    }
    componentWillUnmount() {
        //this.proup.parentElement.removeChild(this.proup)
    }
    componentWillUpdate() { 

    }
    componentDidUpdate() {
        
    }
    close() {
        this.props.onCancel();
    }
    _renderLayer() {
        ReactDom.render(
            <div className="modal-wrapper">
                <div className="modal-backgrop" onClick={this.close.bind(this)}></div>
                <div className="modal">
                    <div className="modal-title">{this.props.title}</div>
                    <div className="modal-main">{this.props.children}</div>
                    <div className="modal-foot">3</div>
                    <a className="modal-close" onClick={this.close.bind(this)}><Icon type='close' style={{fontSize: "30px", color: "#fff"}}/></a>
                </div>
            </div>
            , this.proup)
    }
    render () {
        return null;
    }
}
export default Modal;