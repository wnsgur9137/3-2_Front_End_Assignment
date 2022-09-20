// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Root extends React.Component {
    constructor() {
        super();
        var rowNumber = 0
    }
    state = {
        sumCredit: '',  // 학점
        attendance: '', // 출석점수
        assignment: '', // 과제점수
        midtermExam: '',// 중간고사
        finalExam: '',  // 기말고사
        sum: '',    // 총점
        avg: '',    // 평균
        total: '',  // 성적
    };

    addRow = (e) => {
        const trChild = document.getElementById('trDefault');
        const row = trChild.cloneNode(true);
        row.style.display = '';
        row.id = 'trChild' +(++this.rowNumber);
        document.getElementById('tbody').insertBefore(row, null);
    };

    saveTable = (e) => {

    };

    deleteRow = (e) => {

    };

    render() {
        const {
            sumCredit,
            attendance,
            assignment,
            midtermExam,
            finalExam,
            sum,
            avg,
            total,
        } = this.state;
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Front-end 과제</h1>
                <h3 style={{textAlign: "center"}}>3-A 202044021 이준혁</h3>

                <div id={"mainDiv"}>
                    <div className={"infoDiv"}>
                        <h3 style={{lineHeight: "normal"}}>1학년</h3>
                        <div align={"right"}>
                            <button onClick={this.addRow}>추가</button>
                            <button onClick={this.saveTable}>저장</button>
                            <button onClick={this.deleteRow}>삭제</button>
                        </div>
                    </div>

                    <div className={"tableDiv"}>
                        <table className={"mainTable"}>
                            <thead id={"thead"}>
                                <tr>
                                    <th>이수</th>
                                    <th>필수</th>
                                    <th>과목명</th>
                                    <th>학점</th>
                                    <th>출석점수</th>
                                    <th>과제점수</th>
                                    <th>중간고사</th>
                                    <th>기말고사</th>
                                    <th>총점</th>
                                    <th>평균</th>
                                    <th>성적</th>
                                </tr>
                            </thead>

                            <tbody id={"tbody"}>
                                <tr id={"trDefault"} style={{display: "none"}}>
                                    <td style={{width: "5%"}}>
                                        <select>
                                            <option name={"major"}>전공</option>
                                            <option name={"elective"}>교양</option>
                                        </select>
                                    </td>
                                    <td style={{width: "5%"}}>
                                        <select>
                                            <option name={"compulsory"}>필수</option>
                                            <option name={"choice"}>선택</option>
                                        </select>
                                    </td>
                                    <td style={{width: "20%"}}>
                                        <input className={"inputText"} type={"text"} style={{textAlign: "left"}}/>
                                    </td>
                                    <td style={{width: "5%"}}>
                                        <input className={"inputText"} type={"text"}/>
                                    </td>
                                    <td><input className={"inputText"} type={"text"}/></td> {/*출석점수*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*과제점수*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*중간고사*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*기말고사*/}
                                    <td style={{width: "5%"}}></td> {/*총점*/}
                                    <td style={{width: "5%"}}></td> {/*평균*/}
                                    <td style={{width: "5%"}}></td> {/*성적*/}
                                </tr>
                                <tr id={"trChild0"}>
                                    <td style={{width: "5%"}}>
                                        <select>
                                            <option name={"major"}>전공</option>
                                            <option name={"elective"}>교양</option>
                                        </select>
                                    </td>
                                    <td style={{width: "5%"}}>
                                        <select>
                                            <option name={"compulsory"}>필수</option>
                                            <option name={"choice"}>선택</option>
                                        </select>
                                    </td>
                                    <td style={{width: "20%"}}>
                                        <input className={"inputText"} type={"text"} style={{textAlign: "left"}}/>
                                    </td>
                                    <td style={{width: "5%"}}>
                                        <input className={"inputText"} type={"text"}/>
                                    </td>
                                    <td><input className={"inputText"} type={"text"}/></td> {/*출석점수*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*과제점수*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*중간고사*/}
                                    <td><input className={"inputText"} type={"text"}/></td> {/*기말고사*/}
                                    <td style={{width: "5%"}}></td> {/*총점*/}
                                    <td style={{width: "5%"}}></td> {/*평균*/}
                                    <td style={{width: "5%"}}></td> {/*성적*/}
                                </tr>
                            </tbody>

                            <tfoot id={"tfoot"}>
                                <tr>
                                    <th colSpan={3}>합계</th>
                                    <th>{sumCredit}</th>  {/*학점*/}
                                    <th>{attendance}</th>   {/*출석점수*/}
                                    <th>{assignment}</th>   {/*과제점수*/}
                                    <th>{midtermExam}</th>   {/*중간고사*/}
                                    <th>{finalExam}</th>   {/*기말고사*/}
                                    <th>{sum}</th>    {/*총점*/}
                                    <th>{avg}</th>    {/*평균*/}
                                    <th>{total}</th>  {/*성적*/}
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));