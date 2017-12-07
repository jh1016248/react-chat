import React from 'react';
import './style.less';
import cover from './cover.jpg'
import { Button, Icon} from 'antd'
import Modal from '../Modal'

class ProfileHead extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMoreUserInfo: false,
            height: 60,
            showDialog: false,
        }
    }
    componentDidMount() {
        this.setState({
            "height": document.querySelector(".profileheader-contentBody > span").offsetHeight
        });
    }
    getListData(list) {
        var t = [];
        list.map(function (item, ind){
            if(ind == list.length-1){
                t.push(<span key={ind}>{item}</span>);
            }
            else{
                if(item != ''){
                    t.push(<span key={ind}>{item}<div className="divider"></div></span>)
                }
            }
        })
        return t;
    }
    contentBody() {
        var userInfo = this.props.userInfo;
        if(this.state.showMoreUserInfo){
            return (
                <span>
                    <div className="profileheader-detailItem">
                        <span className="label">居住地</span>
                        <div>现居{userInfo.address}</div>
                    </div>
                    <div className="profileheader-detailItem">
                        <span className="label">居住地</span>
                        <div>
                            {userInfo.school}
                        </div>
                    </div>
                    <div className="profileheader-detailItem">
                        <span className="label">职业经历</span>
                        <div>
                            {this.getListData(userInfo.history)}
                        </div>
                    </div>
                    <div className="profileheader-detailItem">
                        <span className="label">个人简介</span>
                        <div>
                            {userInfo.intro}
                        </div>
                    </div>
                </span>
            )
        }
        return (
            <span>
                <div className="infoItem">
                    {this.getListData(userInfo.tag)}
                </div>
                <div className="infoItem">
                    {this.getListData([userInfo.school,userInfo.professional,<Icon type={userInfo.sex} style={{fontSize: "12px",color: '#8590a6'}}/>])}
                    
                </div>
            </span>
        )
    }
    showMoreInfo() {
        this.setState({
            showMoreUserInfo: !this.state.showMoreUserInfo
        }, function (){
            this.setState({
                "height": document.querySelector(".profileheader-contentBody > span").offsetHeight
            })
        })
    }
    showModal() {
        this.setState({
            showDialog: true
        })
    }
    handleOk() {
        this.setState({
            showDialog: true
        })
    }
    handleCancel() {
        this.setState({
            showDialog: false
        })
    }
    render () {
        var userInfo = this.props.userInfo;
        return (
            <div className="profile-head Card">
                <div className="usercover"><img src={userInfo.cover} alt=""/></div>
                <div className="user-info">
                    <div className="head"><img src={userInfo.pic} alt=""/></div>
                    <div className="info">
                        <div className="profileheader-contentHead">
                            <h1>
                                <span className="profileheader-name">{userInfo.name}</span>
                                <span className="profileheader-headline">{userInfo.rich}</span>
                            </h1>
                        </div>
                        <div className="profileheader-contentBody" style={{ height: this.state.height }}>
                            {this.contentBody()}
                        </div>
                        <div className="profileheader-contentFoot">
                            <a className="showMore" onClick={ this.showMoreInfo.bind(this) }>
                                <Icon type={this.state.showMoreUserInfo?'up':'down'} />
                                <span>查看详细资料</span>
                            </a>
                            <div className="MemberButtonGroup">
                                <Button type="primary" size="large" icon="plus">关注他</Button>
                                <Button size="large" icon="message" onClick={this.showModal.bind(this)}>私信</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal 
                    title="发送私信"
                    visible={this.state.showDialog} 
                    onOk={this.handleOk.bind(this)} 
                    onCancel={this.handleCancel.bind(this)}
                >
                    <div style={{height: "400px"}}></div>
                </Modal>
            </div>
        )
    }
}
export default ProfileHead;