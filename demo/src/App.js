import React from 'react';
import { AwesomePopup, AwesomePopupsContainer, AwesomePopupStates } from 'react-awesome-popups';
import logo from './logo.svg';
import './App.css';
import './css/popup.css';


global.ReactAwesomePopups = React.createRef();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doApiCall(){
    let overrideAnimState = AwesomePopupStates.clip
    overrideAnimState.wait.duration = -1;
    const popupId = global.ReactAwesomePopups.current.popup(
        <AwesomePopup
            type={"success"}
            style={{width: 150}}
            animStates={overrideAnimState}
        >
            Connected!!
        </AwesomePopup>
    )

    await sleep(1500); // Wait for 1500ms

    global.ReactAwesomePopups.current.close(popupId);
}

function remove(){
    console.log("THIS:",this);
    this.remove(this.props.popupId);
}

function onAccept(){
    console.log("Accepted");
}
function addOptionsPopup(){
    let overrideAnimState = AwesomePopupStates.clip
    overrideAnimState.wait.duration = -1;
    const popupId = global.ReactAwesomePopups.current.popup(
        <AwesomePopup
            type={"success"}
            style={{width: 150}}
            animStates={overrideAnimState}
        >
            <div>
                <button onClick={onAccept}>
                    Accept
                </button>
                <button onClick={remove}>
                    Remove
                </button>
            </div>
        </AwesomePopup>
    )
}
class App extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        //TODO remove (test)
        console.log("started mount")
        // this.container.current.popup(<Popup type={"success"} style={{width: 150}} closeButton={<div>X</div>}
        //                                     animStates={PopupStates.clip}>
        //     Test 2
        // </Popup>,{
        //     duration:-1
        // })
        // this.container.current.popup(<Popup type={"success"} style={{width: 150}} closeButton={<div>X</div>}
        // animStates={PopupStates.clip}
        // options={{
        //     fadeInDuration: 500,
        //     duration:-1,
        //     fadeOutDuration: 500,
        //
        // }}>
        //     Test 2
        // </Popup>)
        // this.container.current.popup(<Popup type={"success"} style={{width: 150}}
        //                                     animStates={PopupStates.clip}
        // >
        //     Test 4
        // </Popup>)
        // this.container.current.popup(<Popup type={"success"} style={{width: 150}}
        //                                     animStates={PopupStates.clip}
        // >
        //     Test 5
        // </Popup>,{
        //     fadeInDuration: 500,
        //     duration:4000,
        //     fadeOutDuration: 500,
        //
        // })
    }
    render(){
        return (
            <div className="App">
                <button onClick={doApiCall}>
                    Popup!
                </button>
                {/*<button onClick={addOptionsPopup}>*/}
                {/*    Popup!*/}
                {/*</button>*/}
                <div
                    style={{
                        display: 'flex',
                        pointerEvents: 'none',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginTop: '1em',
                        marginRight: '1em',
                    }}
                >
                    <AwesomePopupsContainer ref={global.ReactAwesomePopups}>
                        <AwesomePopup type={"success"} style={{width: 150}}
                                      animStates={AwesomePopupStates.clip}
                        >
                            Test
                        </AwesomePopup>
                        {/*<Popup type={"success"} style={{width: 150}}>*/}
                        {/*    Test1*/}
                        {/*</Popup>*/}
                    </AwesomePopupsContainer>
                </div>

            </div>
        );
    }
}

export default App;
